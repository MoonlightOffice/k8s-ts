import { Config, Env } from "./config.ts";
import { configLocal } from "./local.ts";
import { configDev } from "./development.ts";
import { configProd } from "./production.ts";

function getConfig(env: Env): Config {
  switch (env) {
    case "local":
      return configLocal;
    case "dev":
      return configDev;
    case "prod":
      return configProd;
    default:
      return configLocal;
  }
}

export * from "./config.ts";
export const config = getConfig(Deno.env.get("ENV") as Env);
