import { createFileRoute } from "@tanstack/react-router";

import { PoliciesPage } from "~/components/policies/PoliciesPage";

export const Route = createFileRoute("/policies")({
  component: PoliciesPage,
});
