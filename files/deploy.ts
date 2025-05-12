import { labels, metadata } from "$pkg";
import { config } from "$config";
import { Deployment } from "../pkg/resources/deploy.ts";
import { PodSpec, Resources } from "../pkg/resources/pod.ts";

function deployApp(param: {
  name: string;
  execTask: string;
  replicas?: number;
}): Deployment {
  const deployMetadata = metadata({
    name: param.name,
    namespace: config.NAMESPACE,
  });

  const resources: Resources = {
    requests: {
      cpu: "250m",
      memory: "500Mi",
    },
    limits: {
      cpu: "500m",
      memory: "1Gi",
    },
  };

  const podSpec: PodSpec = {
    containers: [
      {
        name: param.name,
        image: config.APP_IMAGE,
        imagePullPolicy: "IfNotPresent",
        ports: [{ containerPort: 8080 }],
        env: [{ name: "EXEC_TASK", value: param.execTask }],
        envFrom: [{ secretRef: { name: config.SECRET_NAME } }],
        resources: resources,
        workingDir: "/etc",
        command: [
          "caddy",
          "file-server",
          "--browse",
          "--listen",
          "0.0.0.0:8080",
        ],
      },
    ],
  };

  return {
    apiVersion: "apps/v1",
    kind: "Deployment",
    metadata: deployMetadata,
    spec: {
      replicas: param.replicas ? param.replicas : 1,
      selector: {
        matchLabels: labels(param.name),
      },
      strategy: {
        type: "RollingUpdate",
        rollingUpdate: {
          maxSurge: "25%",
          maxUnavailable: "25%",
        },
      },
      template: {
        metadata: deployMetadata,
        spec: podSpec,
      },
    },
  };
}

export const deploys: Deployment[] = [
  deployApp({ name: "web", execTask: "web", replicas: 3 }),
  deployApp({ name: "some-job", execTask: "some-job", replicas: 1 }),
];
