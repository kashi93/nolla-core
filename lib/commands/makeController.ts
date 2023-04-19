import yargs from "yargs";
import fs from "fs";
import chalk from "chalk";
import createController from "../rainbows/lucy/createController";

export default yargs.command({
  command: "create:controller",
  describe: "Create a new controller class",
  builder: {
    name: {
      alias: "n",
      describe: "Name of controller",
      demandOption: true,
      type: "string",
    },
    // resource: {
    //   alias: "r",
    //   demandOption: false,
    //   describe: "Generate controller with resources app method",
    //   type: "boolean",
    //   default: false,
    // },
  },
  async handler(argv: any) {
    new createController().finally(argv);
  },
});
