import { Layer } from "effect";

import { PoliciesApiConfig, PoliciesApiService } from "../services/policies-api-service";

export const livePoliciesApiConfig = Layer.succeed(
  PoliciesApiConfig,
  PoliciesApiConfig.of({
    baseUrl: "http://localhost:3001",
  }),
);

export const livePoliciesApiService = PoliciesApiService.Default.pipe(Layer.provideMerge(livePoliciesApiConfig));
