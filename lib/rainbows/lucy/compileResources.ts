import chalk from "chalk";
import { copy } from "../copy";

export default class compileResources {
    handler() {
        this.finally();
    }
    async finally() {
        await copy(
            `${process.cwd()}/resources`,
            `${process.cwd()}/dist/resources`
        );
        console.log(chalk.green(`Resources successfully compiled.`));
    }
}