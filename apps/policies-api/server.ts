import { createServer } from "node:http";

import { HttpMiddleware, HttpRouter, HttpServer } from "@effect/platform";
import { NodeHttpServer, NodeRuntime } from "@effect/platform-node";
import { Layer } from "effect";

import { router } from "./src/router";

const server = NodeHttpServer.layer(() => createServer(), { port: 3001 });

const app = router
  .pipe(HttpRouter.use(HttpMiddleware.logger))
  .pipe(HttpServer.serve(HttpMiddleware.cors()), HttpServer.withLogAddress)
  .pipe(Layer.provide(server));

NodeRuntime.runMain(Layer.launch(app));
