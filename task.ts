import { emit, emitSecret, recreateDirectory } from "$tool";
import { apiResources, appNamespace } from "$files";
import { config } from "$config";

const TASK = Deno.env.get("TASK") || "";
const ENV = Deno.env.get("ENV") || "local";

const emittingDirectory = ".out/";

switch (TASK) {
  case "emit":
    await recreateDirectory(emittingDirectory);
    Deno.writeFileSync(
      `${emittingDirectory}/spec.yaml`,
      new Uint8Array(await new Blob([emit(apiResources)]).arrayBuffer()),
    );
    break;
  case "emit-secret":
    await recreateDirectory(emittingDirectory);
    {
      const jsonSecret = await new Blob([
        Deno.readFileSync(`./secret.${ENV}.json`),
      ]).text();
      const secret = emitSecret({
        name: config.SECRET_NAME,
        namespace: appNamespace,
        jsonSecret,
      });
      Deno.writeFileSync(
        `${emittingDirectory}./secret.yaml`,
        new Uint8Array(await new Blob([secret]).arrayBuffer()),
      );
    }
    break;
  default:
    console.log("run `deno task` to check available tasks");
}
