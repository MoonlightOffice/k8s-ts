import { ApiResource } from "$api/core/mod.ts";
import { deploys } from "./deploy.ts";
import { appNamespace } from "./ns.ts";
import { services } from "./svc.ts";

export const apiResources: ApiResource[] = [
  appNamespace,
  ...services,
  ...deploys,
];

export { appNamespace } from "./ns.ts";
