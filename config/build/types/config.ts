export type Mode = "development" | "production";

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
}

export interface BuildOptions {
  mode: Mode;
  paths: BuildPaths;
  isDev: boolean;
}
