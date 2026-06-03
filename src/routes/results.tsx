import { createFileRoute, Outlet } from "@tanstack/react-router";
import { LplLayout } from "@/components/lpl/LplLayout";

export const Route = createFileRoute("/results")({
  component: ResultsLayout,
});

function ResultsLayout() {
  return (
    <LplLayout>
      <Outlet />
    </LplLayout>
  );
}
