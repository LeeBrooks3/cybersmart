import { Schema } from "effect";

import { idSchema } from "./id";

export const policySchema = Schema.Struct({
  policyId: idSchema,
  name: Schema.String.pipe(Schema.minLength(1, { message: () => "Policy name is required" })),
  description: Schema.String,
});

export type Policy = typeof policySchema.Type;
