import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, ChevronDown, Play, Trophy, Users, Zap } from "lucide-react";
import { LplLayout } from "@/components/lpl/LplLayout";
import { CricketGroundHero } from "@/components/lpl/CricketGroundHero";
import { HomeSection } from "@/components/lpl/HomeSection";
import { SectionHeader } from "@/components/lpl/SectionHeader";
import { ScrollReveal } from "@/components/lpl/ScrollReveal";
import { MatchCard } from "@/components/lpl/MatchCard";
import { VideoCard, VideoModal } from "@/components/lpl/VideoModal";
import { Button } from "@/components/ui/button";
import { getTeam, getTeamName } from "@/data/lpl";
import {
  CURRENT_SEASON,
  REGISTRATION_FEE,
  announcement,
  results,
  schedule,
  standings,
  videos,
} from "@/data/lpl";
import { useState } from "react";
import type { Video } from "@/data/lpl";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LPL — Losmonpur Premier League | Season 7" },
      {
        name: "description",
        content:
          "Losmonpur Premier League — 14 overs, 9 wards, one trophy. Match schedule, results, stats & videos.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  const stats = [
    { icon: Users, label: "Teams", value: `${CURRENT_SEASON.teams}`, sub: "Wards" },
    { icon: Calendar, label: "Format", value: `${CURRENT_SEASON.overs}`, sub: "Overs" },
    { icon: Trophy, label: "Season", value: `${CURRENT_SEASON.number}`, sub: "Edition" },
    { icon: Play, label: "Videos", value: `${videos.length}+`, sub: "Highlights" },
  ];

  return (
    <LplLayout>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <CricketGroundHero />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-20 pt-28 md:px-6 md:pb-28 md:pt-36">
          <div className="animate-fade-up glass-card inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <Zap className="h-3.5 w-3.5 fill-primary" />
            Season {CURRENT_SEASON.number} · {CURRENT_SEASON.year}
          </div>
          <h1 className="animate-fade-up animate-fade-up-delay-1 display mt-8 max-w-5xl text-[clamp(3.5rem,12vw,9rem)] leading-[0.9] tracking-wide">
            <span className="text-foreground">LOSMONPUR</span>
            <br />
            <span className="shimmer-text">PREMIER</span>
            <br />
            <span className="text-foreground/95">LEAGUE</span>
          </h1>
          <p className="animate-fade-up animate-fade-up-delay-2 mt-8 max-w-lg text-lg leading-relaxed text-foreground/75 md:text-xl">
            {CURRENT_SEASON.overs} overs · {CURRENT_SEASON.teams} wards · One trophy.
            <span className="mt-2 block text-primary/90">
              গ্রামের সবচেয়ে বড় ক্রিকেট টুর্নামেন্ট।
            </span>
          </p>
          <div className="animate-fade-up animate-fade-up-delay-3 mt-10 flex flex-wrap gap-4">
            <Button
              size="lg"
              className="h-12 rounded-full bg-primary px-8 text-base font-bold shadow-[0_0_30px_oklch(0.82_0.16_85/0.35)] hover:bg-primary/90"
              asChild
            >
              <Link to="/join">Join Season {CURRENT_SEASON.number}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-white/15 bg-white/5 px-8 text-base backdrop-blur-md hover:bg-white/10"
              asChild
            >
              <Link to="/schedule">
                View Schedule <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <p className="animate-fade-up animate-fade-up-delay-4 mt-6 text-sm text-muted-foreground">
            Registration fee ৳{REGISTRATION_FEE.toLocaleString("en-BD")} ·{" "}
            <Link to="/join" className="text-primary hover:underline">
              Register now
            </Link>
          </p>
        </div>
        <div className="scroll-hint absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-muted-foreground">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-5 w-5" />
        </div>
      </section>

      {/* Announcement */}
      <HomeSection variant="elevated" className="py-10 md:py-12">
        <ScrollReveal direction="scale">
          <div className="glass-card relative overflow-hidden rounded-2xl p-6 md:flex md:items-center md:justify-between md:gap-8 md:p-8">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/20 blur-3xl"
              aria-hidden
            />
            <div className="relative">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Announcement
              </span>
              <h2 className="display mt-2 text-3xl text-foreground md:text-4xl">
                {announcement.title}
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {announcement.message}
              </p>
            </div>
            <Button
              className="relative mt-6 shrink-0 rounded-full bg-primary px-8 font-bold md:mt-0"
              asChild
            >
              <Link to="/join">{announcement.cta}</Link>
            </Button>
          </div>
        </ScrollReveal>
      </HomeSection>

      {/* Stats */}
      <HomeSection variant="mesh">
        <SectionHeader title="The Tournament" subtitle="Everything you need to know at a glance" accent="Overview" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ icon: Icon, label, value, sub }, i) => (
            <ScrollReveal key={label} delay={i * 100} direction="up">
              <div className="stat-card group rounded-2xl p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary/25">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="display text-4xl text-foreground">
                  {value}
                  <span className="ml-1 text-2xl text-primary">{sub}</span>
                </div>
                <div className="mt-1 text-sm font-medium text-muted-foreground">{label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </HomeSection>

      {/* Latest Results */}
      <HomeSection id="results">
        <SectionHeader
          title="Latest Results"
          subtitle="Recent match outcomes — tap for full scorecard"
          accent="Matches"
          linkTo="/results"
          linkLabel="All Results"
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {results.slice(0, 3).map((m, i) => (
            <ScrollReveal key={m.id} delay={i * 120} direction="up">
              <MatchCard match={m} showResult linkToScorecard />
            </ScrollReveal>
          ))}
        </div>
      </HomeSection>

      {/* Schedule */}
      <HomeSection variant="grass">
        <SectionHeader
          title="Upcoming Matches"
          subtitle={`Season ${CURRENT_SEASON.number} fixture list`}
          accent="Schedule"
          linkTo="/schedule"
          linkLabel="Full Schedule"
        />
        <div className="grid gap-5 md:grid-cols-2">
          {schedule.slice(0, 4).map((m, i) => (
            <ScrollReveal key={m.id} delay={i * 100} direction={i % 2 === 0 ? "left" : "right"}>
              <MatchCard match={m} />
            </ScrollReveal>
          ))}
        </div>
      </HomeSection>

      {/* Standings */}
      <HomeSection variant="elevated">
        <SectionHeader
          title="Points Table"
          subtitle="Top teams heading into the knockouts"
          accent="Standings"
          linkTo="/standings"
          linkLabel="Full Table"
        />
        <ScrollReveal direction="scale">
          <div className="glass-card overflow-hidden rounded-2xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/60 bg-primary/5 text-left text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  <th className="px-5 py-4">#</th>
                  <th className="px-5 py-4">Team</th>
                  <th className="px-5 py-4 text-center">P</th>
                  <th className="px-5 py-4 text-center">W</th>
                  <th className="px-5 py-4 text-center">L</th>
                  <th className="px-5 py-4 text-center">NRR</th>
                  <th className="px-5 py-4 text-center">Pts</th>
                </tr>
              </thead>
              <tbody>
                {standings.slice(0, 5).map((s, i) => {
                  const team = getTeam(s.teamId);
                  return (
                    <tr
                      key={s.teamId}
                      className="border-b border-border/40 transition-colors hover:bg-primary/5"
                    >
                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold ${
                            i === 0
                              ? "bg-primary text-primary-foreground"
                              : i < 3
                                ? "bg-accent/25 text-accent-foreground"
                                : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {i + 1}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2 font-semibold">
                          <span
                            className="h-2.5 w-2.5 rounded-full"
                            style={{ backgroundColor: team?.color }}
                          />
                          {getTeamName(s.teamId)}
                        </div>
                      </td>
                      <td className="px-5 py-4 text-center text-muted-foreground">{s.played}</td>
                      <td className="px-5 py-4 text-center font-medium text-live">{s.won}</td>
                      <td className="px-5 py-4 text-center">{s.lost}</td>
                      <td className="px-5 py-4 text-center">
                        <span className={s.nrr >= 0 ? "text-live" : "text-destructive"}>
                          {s.nrr > 0 ? "+" : ""}
                          {s.nrr.toFixed(2)}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-center">
                        <span className="display text-xl text-primary">{s.points}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </HomeSection>

      {/* Videos */}
      <HomeSection variant="mesh" className="pb-24">
        <SectionHeader
          title="Featured Videos"
          subtitle="Highlights, finals & best moments"
          accent="Watch"
          linkTo="/videos"
          linkLabel="All Videos"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.slice(0, 3).map((v, i) => (
            <ScrollReveal key={v.id} delay={i * 120} direction="up">
              <VideoCard video={v} onClick={() => setActiveVideo(v)} />
            </ScrollReveal>
          ))}
        </div>
      </HomeSection>

      <VideoModal
        video={activeVideo}
        open={!!activeVideo}
        onOpenChange={(open) => !open && setActiveVideo(null)}
      />
    </LplLayout>
  );
}
