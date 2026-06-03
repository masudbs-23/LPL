import { Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Video } from "@/data/lpl";

type VideoModalProps = {
  video: Video | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function VideoModal({ video, open, onOpenChange }: VideoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl border-border bg-card p-0 overflow-hidden">
        <DialogTitle className="sr-only">{video?.title ?? "Video"}</DialogTitle>
        {video && (
          <div className="aspect-video w-full">
            <iframe
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        )}
        {video && (
          <div className="p-4">
            <h3 className="display text-xl text-foreground">{video.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{video.description}</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

type VideoCardProps = {
  video: Video;
  onClick: () => void;
};

const VIDEO_CARD_HEIGHT = "h-[260px]";

export function VideoCard({ video, onClick }: VideoCardProps) {
  const thumb = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`card-glow group flex ${VIDEO_CARD_HEIGHT} w-full flex-col overflow-hidden rounded-xl border border-border bg-card text-left transition-colors hover:border-primary/40`}
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="relative h-[146px] w-full shrink-0 overflow-hidden bg-muted">
        <img
          src={thumb}
          alt={video.title}
          width={480}
          height={270}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-lg">
            <Play className="h-5 w-5 fill-primary-foreground text-primary-foreground" />
          </div>
        </div>
        <span className="absolute bottom-2 right-2 rounded bg-background/80 px-2 py-0.5 text-xs font-medium">
          {video.duration}
        </span>
        <span className="absolute left-2 top-2 rounded-full bg-accent/80 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
          {video.category.replace("-", " ")}
        </span>
      </div>
      <div className="flex min-h-0 flex-1 flex-col justify-center gap-1 px-3 py-3">
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
          {video.title}
        </h3>
        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">{video.description}</p>
      </div>
    </button>
  );
}

export { VIDEO_CARD_HEIGHT };
