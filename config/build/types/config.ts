export type Mode = "development" | "production";

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
}

export interface BuildEnv {
  mode: Mode;
  port: number;
}

export interface BuildOptions {
  mode: Mode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}
