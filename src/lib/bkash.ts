const BKASH_API = "https://bkash-checkout-iframe.onrender.com/api/bkash";

export async function fetchBkashToken(): Promise<string> {
  const res = await fetch(`${BKASH_API}/token`, { method: "POST" });
  if (!res.ok) throw new Error("Failed to initialize bKash");
  const data = await res.json();
  if (!data.id_token) throw new Error("Invalid token response");
  return data.id_token;
}

export async function createBkashPayment(amount: number): Promise<string> {
  const res = await fetch(`${BKASH_API}/createpayment?amount=${amount}`);
  if (!res.ok) throw new Error("Failed to create payment");
  const data = await res.json();
  if (!data.paymentID) throw new Error("Payment creation failed");
  return data.paymentID;
}

export async function executeBkashPayment(paymentID: string): Promise<boolean> {
  const res = await fetch(`${BKASH_API}/executepayment?paymentID=${paymentID}`);
  if (!res.ok) throw new Error("Failed to execute payment");
  const data = await res.json();
  return Boolean(data.paymentID);
}

export function generateBkashCheckoutHtml(amount: number, paymentID: string): string {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://scripts.sandbox.bka.sh/versions/1.2.0-beta/checkout/bKash-checkout-sandbox.js"></script>
  <style>
    html, body { margin: 0; padding: 0; height: 100%; background: #fff; }
  </style>
</head>
<body>
  <button id="bKash_button" style="display:none;"></button>
  <script>
    function post(msg) {
      try {
        if (window.parent && window.parent !== window) {
          window.parent.postMessage(msg, '*');
        }
      } catch (e) {}
    }

    function initBkash() {
      bKash.init({
        paymentMode: 'checkout',
        paymentRequest: {
          amount: '${amount}',
          intent: 'sale',
          currency: 'BDT'
        },
        createRequest: function() {
          bKash.create().onSuccess({ paymentID: '${paymentID}' });
        },
        executeRequestOnAuthorization: function() {
          post('BKASH_SUCCESS');
        },
        onClose: function() {
          post('BKASH_CLOSED');
        }
      });
      setTimeout(function() {
        document.getElementById('bKash_button').click();
        post('BKASH_READY');
      }, 100);
    }

    function start() {
      if (typeof bKash !== 'undefined') {
        initBkash();
        return;
      }
      var count = 0;
      var interval = setInterval(function() {
        if (typeof bKash !== 'undefined') {
          clearInterval(interval);
          initBkash();
        }
        if (++count > 15) {
          clearInterval(interval);
          post('BKASH_LOAD_FAILED');
        }
      }, 500);
    }

    window.addEventListener('error', function(e) {
      post('BKASH_ERROR:' + (e.message || 'Unknown error'));
    });

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', start);
    } else {
      start();
    }
  </script>
</body>
</html>`;
}

export type BkashMessage =
  | "BKASH_READY"
  | "BKASH_SUCCESS"
  | "BKASH_CLOSED"
  | "BKASH_LOAD_FAILED"
  | { type: "BKASH_ERROR"; message: string };

export function parseBkashMessage(data: unknown): BkashMessage | null {
  if (typeof data !== "string") return null;
  if (
    data === "BKASH_READY" ||
    data === "BKASH_SUCCESS" ||
    data === "BKASH_CLOSED" ||
    data === "BKASH_LOAD_FAILED"
  ) {
    return data;
  }
  if (data.startsWith("BKASH_ERROR:")) {
    return { type: "BKASH_ERROR", message: data.slice(12) };
  }
  return null;
}
