import { HttpRouter } from "@effect/platform";

import { homeRoute } from "./routes";
import {
  deletePolicyRoute,
  getPoliciesRoute,
  getPolicyRoute,
  postPoliciesRoute,
  putPolicyRoute,
} from "./routes/policies";

export const router = HttpRouter.empty.pipe(
  homeRoute,
  getPoliciesRoute,
  postPoliciesRoute,
  getPolicyRoute,
  putPolicyRoute,
  deletePolicyRoute,
);
