import { ApiResource } from "$pkg";
import { deploys } from "./deploy.ts";
import { appNamespace } from "./ns.ts";
import { services } from "./svc.ts";

export const apiResources: ApiResource[] = [
  appNamespace,
  ...services,
  ...deploys,
];
