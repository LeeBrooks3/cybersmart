import { FetchHttpClient, HttpClient, HttpClientRequest } from "@effect/platform";
import type { Policy } from "@leebrooks3/effect/schemas/policy";
import { policySchema } from "@leebrooks3/effect/schemas/policy";
import { Context, Effect, Schema } from "effect";

export class PoliciesApiConfig extends Context.Tag("PoliciesApiConfig")<
  PoliciesApiConfig,
  {
    readonly baseUrl: string;
  }
>() {
  //
}

export class PoliciesApiService extends Effect.Service<PoliciesApiService>()("PoliciesApiService", {
  effect: Effect.gen(function* () {
    const { baseUrl } = yield* PoliciesApiConfig;
    const client = yield* HttpClient.HttpClient;

    const getPolicies = () =>
      client
        .get(`${baseUrl}/policies`)
        .pipe(Effect.andThen((res) => res.json.pipe(Effect.flatMap(Schema.decodeUnknown(Schema.Array(policySchema))))));

    const createPolicy = (policy: Policy) =>
      HttpClientRequest.post(`${baseUrl}/policies`).pipe(
        HttpClientRequest.bodyJson(policy),
        Effect.andThen(client.execute),
      );

    const updatePolicy = (policy: Policy) =>
      HttpClientRequest.put(`${baseUrl}/policies/${policy.policyId}`).pipe(
        HttpClientRequest.bodyJson(policy),
        Effect.andThen(client.execute),
      );

    const deletePolicy = (policy: Policy) => client.del(`${baseUrl}/policies/${policy.policyId}`);

    return {
      getPolicies,
      createPolicy,
      updatePolicy,
      deletePolicy,
    };
  }),
  dependencies: [FetchHttpClient.layer],
}) {}
