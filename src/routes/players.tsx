import { createFileRoute, Outlet } from "@tanstack/react-router";
import { LplLayout } from "@/components/lpl/LplLayout";

export const Route = createFileRoute("/players")({
  component: PlayersLayout,
});

function PlayersLayout() {
  return (
    <LplLayout>
      <Outlet />
    </LplLayout>
  );
}
