import {} from "../nolla-core";

globalThis.node_path = (path: string = "") =>
  `${process.cwd()}/node_modules/${path}`;
