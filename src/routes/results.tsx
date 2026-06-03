import { createFileRoute, Outlet } from "@tanstack/react-router";
import { LplLayout } from "@/components/lpl/LplLayout";
import { seasonSearchSchema } from "@/lib/seasonSearch";

export const Route = createFileRoute("/results")({
  validateSearch: seasonSearchSchema,
  component: ResultsLayout,
});

function ResultsLayout() {
  return (
    <LplLayout>
      <Outlet />
    </LplLayout>
  );
}
