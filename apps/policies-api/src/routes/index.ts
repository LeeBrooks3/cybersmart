import { HttpRouter, HttpServerResponse } from "@effect/platform";

export const homeRoute = HttpRouter.get("/", HttpServerResponse.text("Hello, world!"));
