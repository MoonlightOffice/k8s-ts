import { config } from "$config";
import {
  labels,
  metadata,
  Service,
  ServicePort,
  ServiceType,
} from "$api/core/mod.ts";

function service(param: {
  name: string;
  ports?: ServicePort[];
  svcType?: ServiceType;
}): Service {
  let ports = [{
    port: 8080,
    targetPort: 8080,
  }];
  if (param.ports !== undefined && param.ports.length > 0) {
    ports = param.ports;
  }

  return {
    apiVersion: "v1",
    kind: "Service",
    metadata: metadata({ name: param.name, namespace: config.NAMESPACE }),
    spec: {
      type: param.svcType === undefined ? "ClusterIP" : param.svcType,
      ports: ports,
      selector: labels(param.name),
    },
  };
}

export const services: Service[] = [
  service({ name: "web", svcType: "LoadBalancer" }),
];
