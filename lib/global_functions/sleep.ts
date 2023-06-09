import {} from "../nolla-core";

globalThis.sleep = (ms: number): Promise<boolean> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(true);
    }, ms);
  });
};
