import yargs from "yargs";
import migrate from "../rainbows/lucy/migrate";

export default yargs.command({
  command: "migrate",
  describe: "Run the database migrations",
  builder: {
    rollback: {
      alias: "r",
      required: false,
      type: "boolean",
      default: false,
    },
  },
  async handler(argv:any) {
    new migrate().finally(argv);
  },
});
