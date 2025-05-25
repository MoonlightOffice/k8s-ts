export interface Labels extends Record<string, string> {
  "app.kubernetes.io/name": string;
}

export function labels(name: string): Labels {
  return { "app.kubernetes.io/name": name };
}

export interface Metadata {
  namespace: string;
  name: string;
  labels: Labels;
  annotations?: Record<string, string> ;
}

export function metadata(param: {
  namespace: string;
  name: string;
  labels?: Labels;
  annotations?: Record<string, string> ;
}): Metadata {
  const m: Metadata = {
    name: param.name,
    namespace: param.namespace,
    labels: labels(param.name),
  };
  if (param.labels) {
    m.labels = param.labels;
  }
  if (param.annotations) {
    m.annotations = param.annotations;
  }

  return m;
}

export interface ApiResource {
  apiVersion: string;
  kind: string;
  metadata: Metadata;
}
