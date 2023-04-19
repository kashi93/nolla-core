import yargs from "yargs";
import generateUi from "../rainbows/lucy/generateUi";

export default yargs.command({
  command: "generate:ui",
  describe:
    "Generate front-end scaffolding for the application preset type (vue, react)",
  builder: {
    type: {
      alias: "t",
      required: true,
      type: "string",
    },
    rollback: {
      alias: "r",
      required: false,
      type: "boolean",
      default: false,
    },
  },
  async handler(argv: any) {
    new generateUi().finally(argv);
  },
});
