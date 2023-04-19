import yargs from "yargs";
import compileResources from "../rainbows/lucy/compileResources";

export default yargs.command({
  command: "compile:resources",
  describe: "compile all resources/**/* to dist/resources/**/*",
  builder: {},
  async handler(argv: any) {
    new compileResources().finally();
  },
});
