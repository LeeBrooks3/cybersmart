import { Schema } from "effect";
import { ulid } from "ulid";

const ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/;

export const idSchema = Schema.String.pipe(Schema.pattern(ulidRegex), Schema.brand("Id"));

export type Id = Schema.Schema.Type<typeof idSchema>;

export const makeId = (): Id => ulid() as Id;
