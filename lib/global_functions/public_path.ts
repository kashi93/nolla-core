import {} from "../nolla-core";

globalThis.public_path = (path: string = "") =>
  `${process.cwd()}/public/${path}`;
