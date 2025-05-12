import type { Config } from "./config.ts";

export const configLocal: Config = {
  ENV: "local",
  SECRET_NAME: "app-secret",
  NAMESPACE: "local-sample-ns",
  APP_IMAGE: "docker.io/library/caddy",
};
