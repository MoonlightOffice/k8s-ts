import { ApiResource } from "./common.ts";

export interface Namespace extends ApiResource {
  apiVersion: "v1";
  kind: "Namespace";
}
