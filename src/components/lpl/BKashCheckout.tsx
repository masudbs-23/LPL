import { useEffect, useRef } from "react";
import { parseBkashMessage } from "@/lib/bkash";

type BKashCheckoutProps = {
  html: string;
  visible?: boolean;
  onReady?: () => void;
  onClose: () => void;
  onSuccess: () => void;
  onError: (message: string) => void;
};

/**
 * bKash overlay — website page stays mounted underneath.
 * Only covers the viewport with the checkout iframe.
 */
export function BKashCheckout({
  html,
  visible = true,
  onReady,
  onClose,
  onSuccess,
  onError,
}: BKashCheckoutProps) {
  const handledRef = useRef(false);

  useEffect(() => {
    handledRef.current = false;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (handledRef.current) return;
      const parsed = parseBkashMessage(event.data);
      if (!parsed) return;

      if (parsed === "BKASH_READY") {
        onReady?.();
      } else if (parsed === "BKASH_SUCCESS") {
        handledRef.current = true;
        onSuccess();
      } else if (parsed === "BKASH_CLOSED") {
        handledRef.current = true;
        onClose();
      } else if (parsed === "BKASH_LOAD_FAILED") {
        handledRef.current = true;
        onError("bKash লোড হয়নি। আবার চেষ্টা করুন।");
      } else if (parsed.type === "BKASH_ERROR") {
        handledRef.current = true;
        onError(parsed.message);
      }
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [onClose, onSuccess, onError, onReady]);

  return (
    <div
      className={`fixed inset-0 z-[200] transition-opacity duration-150 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <iframe
        title="bKash Checkout"
        srcDoc={html}
        className="h-full w-full border-0 bg-white"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation"
      />
    </div>
  );
}
