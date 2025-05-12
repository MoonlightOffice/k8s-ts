export type Env = "local" | "dev" | "prod";

export interface Config {
  /* Common */
  ENV: Env;
  SECRET_NAME: string;
  NAMESPACE: string;

  /* Application specific */
  APP_IMAGE: string;
}
