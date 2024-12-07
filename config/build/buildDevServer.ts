import { BuildOptions } from "./types/config";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer({ port }: BuildOptions): DevServerConfiguration {
  return { port, open: true };
}
