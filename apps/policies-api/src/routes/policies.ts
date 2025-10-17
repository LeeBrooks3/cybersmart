import { FileSystem, HttpRouter, HttpServerRequest, HttpServerResponse } from "@effect/platform";
import type { Policy } from "@leebrooks3/effect/schemas/policy";
import { policySchema } from "@leebrooks3/effect/schemas/policy";
import { Effect, pipe, Schema } from "effect";

const decodePoliciesFromJSON = (json: string) =>
  pipe(json, JSON.parse, Schema.decodeUnknownSync(Schema.Array(policySchema)));

const encodePoliciesToJSON = (policies: Policy[]) =>
  pipe(policies, Schema.encodeSync(Schema.Array(policySchema)), JSON.stringify);

export const getPoliciesRoute = HttpRouter.get("/policies", HttpServerResponse.file("src/policies.json"));

export const postPoliciesRoute = HttpRouter.post(
  "/policies",
  Effect.gen(function* () {
    const data = yield* HttpServerRequest.schemaBodyJson(policySchema);

    const fileSystem = yield* FileSystem.FileSystem;
    const content = yield* fileSystem.readFileString("src/policies.json");
    const policies = decodePoliciesFromJSON(content);

    yield* fileSystem.writeFileString("src/policies.json", encodePoliciesToJSON([...policies, data]));

    return yield* HttpServerResponse.empty();
  }),
);

export const getPolicyRoute = HttpRouter.get(
  "/policies/:policyId",
  Effect.gen(function* () {
    const { policyId } = yield* HttpRouter.schemaPathParams(
      Schema.Struct({
        policyId: Schema.String,
      }),
    );

    const fileSystem = yield* FileSystem.FileSystem;
    const content = yield* fileSystem.readFileString("src/policies.json");
    const policies = decodePoliciesFromJSON(content);

    const policy = policies.find((policy) => policy.policyId === policyId);

    if (!policy) {
      return yield* HttpServerResponse.empty({ status: 404 });
    }

    return yield* HttpServerResponse.json(policy);
  }),
);

export const putPolicyRoute = HttpRouter.put(
  "/policies/:policyId",
  Effect.gen(function* () {
    const data = yield* HttpServerRequest.schemaBodyJson(policySchema);

    const fileSystem = yield* FileSystem.FileSystem;
    const content = yield* fileSystem.readFileString("src/policies.json");
    const policies = decodePoliciesFromJSON(content);

    yield* fileSystem.writeFileString(
      "src/policies.json",
      encodePoliciesToJSON(policies.map((policy) => (policy.policyId === data.policyId ? data : policy))),
    );

    return yield* HttpServerResponse.empty();
  }),
);

export const deletePolicyRoute = HttpRouter.del(
  "/policies/:policyId",
  Effect.gen(function* () {
    const { policyId } = yield* HttpRouter.schemaPathParams(
      Schema.Struct({
        policyId: Schema.String,
      }),
    );

    const fileSystem = yield* FileSystem.FileSystem;
    const content = yield* fileSystem.readFileString("src/policies.json");
    const policies = decodePoliciesFromJSON(content);

    yield* fileSystem.writeFileString(
      "src/policies.json",
      encodePoliciesToJSON(policies.filter((policy) => policy.policyId !== policyId)),
    );

    return yield* HttpServerResponse.empty();
  }),
);
