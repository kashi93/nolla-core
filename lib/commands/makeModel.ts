import yargs from "yargs";
import createModel from "../rainbows/lucy/createModel";

export default yargs.command({
  command: "create:model",
  describe: "Create a new model class",
  builder: {
    class: {
      alias: "c",
      required: true,
      type: "string",
      describe: "name of model",
    },
    table_name: {
      alias: "tn",
      required: true,
      type: "string",
      describe: "name of database table",
    },
  },
  async handler(argv:any) {
    new createModel().finally(argv);
  },
});
