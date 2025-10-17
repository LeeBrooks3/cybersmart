import { FetchHttpClient } from "@effect/platform";
import { Layer, ManagedRuntime } from "effect";

import { liveLogLevel } from "~/effect/services/logger.live";
import { livePoliciesApiService } from "~/effect/services/policies-api-service.live";

const ClientLayerLive = Layer.mergeAll(liveLogLevel, livePoliciesApiService, FetchHttpClient.layer);

export const clientRuntime = ManagedRuntime.make(ClientLayerLive);
