import { Config, Effect, Layer, Logger, LogLevel } from "effect";

export const liveLogLevel = Config.logLevel("LOG_LEVEL").pipe(
  Config.withDefault(LogLevel.All),
  Effect.andThen((level) => Logger.minimumLogLevel(level)),
  Layer.unwrapEffect,
);
