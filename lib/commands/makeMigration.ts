import yargs from "yargs";
import createMigration from "../rainbows/lucy/createMigration";

export default yargs.command({
  command: "create:migration",
  describe: "Create a new migration files",
  builder: {
    name: {
      alias: "n",
      required: true,
      type: "string",
      describe: "The name of the migration",
    },
    create: {
      alias: "c",
      required: false,
      type: "string",
      describe: "The table to be created",
    },
    table: {
      alias: "t",
      required: false,
      type: "string",
      describe: "The table to migrate",
    },
  },
  async handler(argv:any) {
    new createMigration().finally(argv)
  },
});
