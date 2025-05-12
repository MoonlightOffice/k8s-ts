import type { Config } from "./config.ts";

export const configDev: Config = {
  ENV: "dev",
  SECRET_NAME: "app-secret",
  NAMESPACE: "dev-sample-ns",
  APP_IMAGE: "docker.io/library/caddy",
};
