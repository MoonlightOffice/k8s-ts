import type { Config } from "./config.ts";

export const configProd: Config = {
  ENV: "prod",
  SECRET_NAME: "app-secret",
  NAMESPACE: "prod-sample-ns",
  APP_IMAGE: "docker.io/library/caddy",
};
