import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { LplLayout } from "@/components/lpl/LplLayout";
import { PageHero } from "@/components/lpl/PageHero";
import { VideoCard, VideoModal } from "@/components/lpl/VideoModal";
import { Button } from "@/components/ui/button";
import { CURRENT_SEASON, videos } from "@/data/lpl";
import type { Video } from "@/data/lpl";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Videos — LPL Losmonpur Premier League" },
      { name: "description", content: "Match highlights, interviews and best moments from LPL." },
    ],
  }),
  component: VideosPage,
});

const categories = [
  { id: "all", label: "All" },
  { id: "highlights", label: "Highlights" },
  { id: "final", label: "Finals" },
  { id: "best-moments", label: "Best Moments" },
  { id: "interview", label: "Interviews" },
] as const;

function VideosPage() {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);
  const [category, setCategory] = useState<string>("all");

  const filtered =
    category === "all" ? videos : videos.filter((v) => v.category === category);

  return (
    <LplLayout>
      <PageHero
        title="Videos"
        subtitle={`Season ${CURRENT_SEASON.number} highlights, finals & best moments — click to play`}
      />

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <Button
              key={c.id}
              size="sm"
              variant={category === c.id ? "default" : "outline"}
              className={`rounded-full ${category === c.id ? "bg-primary" : ""}`}
              onClick={() => setCategory(c.id)}
            >
              {c.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {filtered.map((v) => (
            <div key={v.id} className="h-[260px] w-full">
              <VideoCard video={v} onClick={() => setActiveVideo(v)} />
            </div>
          ))}
        </div>
      </section>

      <VideoModal
        video={activeVideo}
        open={!!activeVideo}
        onOpenChange={(open) => !open && setActiveVideo(null)}
      />
    </LplLayout>
  );
}
