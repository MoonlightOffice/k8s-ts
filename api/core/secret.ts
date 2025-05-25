import { ApiResource } from "./common.ts";

export interface Secret extends ApiResource {
  apiVersion: "v1";
  kind: "Secret";
  data?: Record<string, string>;
  stringData?: Record<string, string>;
  type?: string;
}
