import { ApiResource } from "./common.ts";

export interface Secret extends ApiResource {
  apiVersion: "v1";
  kind: "Secret";
  data?: {
    [key: string]: string;
  };
  stringData?: {
    [key: string]: string;
  };
  type?: string;
}
