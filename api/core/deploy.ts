import { ApiResource, Labels, Metadata } from "./common.ts";
import { PodSpec } from "./pod.ts";

export interface DeploymentStrategy {
  type: "RollingUpdate";
  rollingUpdate: {
    maxSurge: string | number;
    maxUnavailable: string | number;
  };
}

export interface Deployment extends ApiResource {
  apiVersion: "apps/v1";
  kind: "Deployment";
  spec: {
    replicas: number;
    strategy: DeploymentStrategy;
    selector: {
      matchLabels: Labels;
    };
    template: {
      metadata: Metadata;
      spec: PodSpec;
    };
  };
}
