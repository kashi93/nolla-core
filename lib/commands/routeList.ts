import yargs from "yargs";
import routeListCommand from "../rainbows/lucy/routeListCommand";

export default yargs.command({
  command: "route:list",
  describe: "List all registered routes",
  builder: {},
  async handler(argv: any) {
    new routeListCommand().finally();
  },
});
