import { ApiResource } from "./common.ts";
import { Env, EnvFrom, EnvVarSource } from "./env.ts";

export interface Volume {
  name: string;
  hostPath?: {
    path: string;
    type?: string;
  };
  configMap?: {
    name: string;
    items?: {
      key: string;
      path: string;
    }[];
  };
  secret?: {
    secretName: string;
    items?: {
      key: string;
      path: string;
    }[];
  };
  persistentVolumeClaim?: {
    claimName: string;
    readOnly?: boolean;
  };
}

export interface Resource {
  cpu?: string;
  memory?: string;
}

export interface Resources {
  requests?: Resource;
  limits?: Resource;
}

export interface Container {
  name: string;
  image: string;
  imagePullPolicy: "Always" | "IfNotPresent" | "Never";
  command: string[];
  ports?: {
    containerPort: number;
  }[];
  env?: Env[];
  envFrom?: EnvFrom[];
  resources?: Resources;
  volumeMounts?: {
    name: string;
    mountPath: string;
    readOnly?: boolean;
  }[];
  workingDir?: string;
}

export interface PodSpec {
  containers: Container[];
  volumes?: Volume[];
  nodeSelector?: {
    [key: string]: string;
  };
  restartPolicy?: "Always" | "OnFailure" | "Never";
  terminationGracePeriodSeconds?: number;
}

export interface Pod extends ApiResource {
  apiVersion: "v1";
  kind: "Pod";
  spec: PodSpec;
}
