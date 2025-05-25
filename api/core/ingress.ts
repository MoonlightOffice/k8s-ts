import { ApiResource } from "./common.ts";

export interface IngressBackend {
  service: {
    name: string;
    port: {
      number: number;
    };
  };
}

export interface HTTPIngressPath {
  path: string;
  pathType: "Exact" | "Prefix" | "ImplementationSpecific";
  backend: IngressBackend;
}

export interface HTTPIngressRuleValue {
  paths: HTTPIngressPath[];
}

export interface IngressRule {
  host: string;
  http: HTTPIngressRuleValue;
}

export interface IngressTLS {
  hosts: string[];
  secretName: string;
}

export interface IngressSpec {
  defaultBackend?: IngressBackend;
  ingressClassName?: string;
  rules?: IngressRule[];
  tls?: IngressTLS[];
}

export interface Ingress extends ApiResource {
  apiVersion: "networking.k8s.io/v1";
  kind: "Ingress";
  spec: IngressSpec;
}
