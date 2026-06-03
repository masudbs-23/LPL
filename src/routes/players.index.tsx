import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, User } from "lucide-react";
import { PageHero } from "@/components/lpl/PageHero";
import { SectionHeader } from "@/components/lpl/SectionHeader";
import { ScrollReveal } from "@/components/lpl/ScrollReveal";
import { PlayerCard } from "@/components/lpl/PlayerCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { teams } from "@/data/lpl";
import { DEFAULT_SEASON_ID } from "@/data/seasons";
import { players, searchPlayers, type PlayerRole } from "@/data/players";

export const Route = createFileRoute("/players/")({
  head: () => ({
    meta: [
      { title: "Players — LPL" },
      { name: "description", content: "Search players and view season-wise career stats." },
    ],
  }),
  component: PlayersPage,
});

const roleFilters: { id: PlayerRole | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "batsman", label: "Batsman" },
  { id: "bowler", label: "Bowler" },
  { id: "all-rounder", label: "All-Rounder" },
];

function PlayersPage() {
  const [query, setQuery] = useState("");
  const [role, setRole] = useState<PlayerRole | "all">("all");
  const [teamFilter, setTeamFilter] = useState("all");

  const filtered = useMemo(() => {
    let list = searchPlayers(query, role);
    if (teamFilter !== "all") {
      list = list.filter((p) => {
        const latest = p.careers.find((c) => c.seasonId === DEFAULT_SEASON_ID) ?? p.careers[0];
        return latest?.teamId === teamFilter;
      });
    }
    return list.sort((a, b) => a.name.localeCompare(b.name));
  }, [query, role, teamFilter]);

  return (
    <>
      <PageHero
        title="Players"
        subtitle="Search players — full career by season (batting & bowling)"
      />

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <ScrollReveal>
          <div className="glass-card rounded-2xl p-4 md:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by name, team, or role..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="h-11 border-border/60 bg-background/50 pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {roleFilters.map((f) => (
                  <Button
                    key={f.id}
                    type="button"
                    size="sm"
                    variant={role === f.id ? "default" : "outline"}
                    className={`rounded-full ${role === f.id ? "bg-primary" : ""}`}
                    onClick={() => setRole(f.id)}
                  >
                    {f.label}
                  </Button>
                ))}
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 border-t border-border/40 pt-4">
              <span className="w-full text-xs font-medium text-muted-foreground md:w-auto md:py-2">
                Team:
              </span>
              <Button
                type="button"
                size="sm"
                variant={teamFilter === "all" ? "default" : "outline"}
                className={`rounded-full text-xs ${teamFilter === "all" ? "bg-primary" : ""}`}
                onClick={() => setTeamFilter("all")}
              >
                All Teams
              </Button>
              {teams.map((t) => (
                <Button
                  key={t.id}
                  type="button"
                  size="sm"
                  variant={teamFilter === t.id ? "default" : "outline"}
                  className={`rounded-full text-xs ${teamFilter === t.id ? "bg-primary" : ""}`}
                  onClick={() => setTeamFilter(t.id)}
                >
                  {t.shortName}
                </Button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-10">
          <SectionHeader
            title={`${filtered.length} Player${filtered.length !== 1 ? "s" : ""}`}
            subtitle="Click for full career — all seasons"
            accent="Squad"
          />
        </div>

        {filtered.length === 0 ? (
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-16 text-center">
              <User className="h-12 w-12 text-muted-foreground/50" />
              <p className="mt-4 text-muted-foreground">No players match your search.</p>
            </div>
          </ScrollReveal>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {filtered.map((p, i) => (
              <ScrollReveal
                key={p.id}
                className="h-[220px] w-full"
                delay={Math.min(i * 60, 300)}
                direction="up"
              >
                <PlayerCard player={p} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
