import { metadata, Namespace } from "$api/core/mod.ts";
import { config } from "$config";

export const appNamespace: Namespace = {
  apiVersion: "v1",
  kind: "Namespace",
  metadata: metadata({ name: config.NAMESPACE, namespace: config.NAMESPACE }),
};
