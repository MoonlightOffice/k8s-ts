import type { ApiResource, Labels } from "./common.ts";

export interface ServicePort {
  port: number;
  targetPort: number;
}

export type ServiceType = "ClusterIP" | "LoadBalancer" | "NodePort";

export interface Service extends ApiResource {
  apiVersion: "v1";
  kind: "Service";
  spec: {
    type: ServiceType;
    ports: ServicePort[];
    selector: Labels;
  };
}
