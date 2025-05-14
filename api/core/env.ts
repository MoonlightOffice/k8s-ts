export interface ConfigMapKeySelector {
  name: string;
  key: string;
  optional?: boolean;
}

export interface ObjectFieldSelector {
  apiVersion?: string;
  fieldPath: string;
}

export interface ResourceFieldSelector {
  containerName?: string;
  resource: string;
  divisor?: string;
}

export interface SecretKeySelector {
  name: string;
  key: string;
  optional?: boolean;
}

export interface EnvVarSource {
  configMapKeyRef?: ConfigMapKeySelector;
  fieldRef?: ObjectFieldSelector;
  resourceFieldRef?: ResourceFieldSelector;
  secretKeyRef?: SecretKeySelector;
}

export interface Env {
  name: string;
  value?: string;
  valueFrom?: EnvVarSource;
}

export interface EnvFromSource {
  name: string;
  optional?: boolean;
}

export interface EnvFrom {
  configMapRef?: EnvFromSource;
  value?: string;
  secretRef?: EnvFromSource;
}
