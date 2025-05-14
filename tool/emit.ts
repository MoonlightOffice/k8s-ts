import { ApiResource, metadata, Namespace, Secret } from "$api/core/mod.ts";
import { stringify } from "@std/yaml";

export function emit(apiResources: ApiResource[]): string {
  let output: string = "";
  for (let i = 0; i < apiResources.length; i++) {
    if (i !== 0) {
      output += "\n---\n\n";
    }

    output += stringify(apiResources[i], { useAnchors: false });
  }

  return output;
}

export function emitSecret(param: {
  name: string;
  namespace: Namespace;
  jsonSecret: string;
}): string {
  const secret: Secret = {
    apiVersion: "v1",
    kind: "Secret",
    metadata: metadata({
      name: param.name,
      namespace: param.namespace.metadata.name,
    }),
    stringData: JSON.parse(param.jsonSecret),
  };

  const apiResources: ApiResource[] = [
    param.namespace,
    secret,
  ];

  return emit(apiResources);
}
