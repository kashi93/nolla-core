import chalk from "chalk";
import reactUiCommand from "../../template/ui/react/command/reactUiCommand";
import vueUiRollbackCommand from "../../template/ui/vue/command/vueUiRollbackCommand";
import reactUiRollbackCommand from "../../template/ui/react/command/reactUiRollbackCommand";
import vueUiCommand from "../../template/ui/vue/command/vueUiCommand";

const prompts = require('prompts');

export default class generateUi {
    async handler() {
        const type = await this.chooseType();
        if (type == null) return;
        const rollback = await this.rollback();
        if (rollback == null) return;
        this.finally({ type: type, rollback: rollback })
    }

    async chooseType() {
        const response = await prompts({
            type: 'select',
            name: 'type',
            message: 'Please choose framework',
            choices: [
                { title: 'React', value: "react" },
                { title: 'Vue', value: "vue" },
                { title: 'Bootstrap', value: "bootstrap", disabled: true },
            ],
            initial: 1
        });

        return response.type;
    }

    async rollback() {
        const response = await prompts({
            type: 'toggle',
            name: 'rollback',
            message: 'Do you want to rollback?',
            initial: false,
            active: 'Yes',
            inactive: 'No'
        });

        return response.rollback;
    }

    async finally(argv: { type: string, rollback: boolean }) {
        switch (argv.type) {
            case "react":
                if (!argv.rollback) {
                    await vueUiRollbackCommand.handle();
                    await reactUiCommand.handle();
                    console.log(chalk.green(`React scaffolding installed successfully.`));
                } else {
                    await reactUiRollbackCommand.handle();
                    // await bootstrapUiCommand.handle();
                    console.log(chalk.green(`React scaffolding rollback successfully.`));
                }

                // try {
                //     execSync("npm install", { stdio: "inherit" });
                // } catch (error) {
                //     console.log(error);
                //     process.exit(1);
                // }

                // try {
                //     execSync("npm run prod", { stdio: "inherit" });
                // } catch (error) {
                //     console.log(error);
                //     process.exit(1);
                // }

                break;
            case "vue":
                if (!argv.rollback) {
                    await reactUiRollbackCommand.handle();
                    await vueUiCommand.handle();
                    console.log(chalk.green(`Vue scaffolding installed successfully.`));
                } else {
                    await vueUiRollbackCommand.handle();
                    // await bootstrapUiCommand.handle();
                    console.log(chalk.green(`Vue scaffolding rollback successfully.`));
                }

                // try {
                //     execSync("npm install", { stdio: "inherit" });
                // } catch (error) {
                //     console.log(error);
                //     process.exit(1);
                // }

                // try {
                //     execSync("npm run prod", { stdio: "inherit" });
                // } catch (error) {
                //     console.log(error);
                //     process.exit(1);
                // }

                break;
            // case "bootstrap":
            //   await vueUiRollbackCommand.handle();
            //   await reactUiRollbackCommand.handle();
            //   await bootstrapUiCommand.handle();
            //   console.log(
            //     chalk.green(`Bootstrap scaffolding installed successfully.`)
            //   );

            //   try {
            //     execSync("npm install", { stdio: "inherit" });
            //   } catch (error) {
            //     console.log(error);
            //     process.exit(1);
            //   }

            //   try {
            //     execSync("npm run prod", { stdio: "inherit" });
            //   } catch (error) {
            //     console.log(error);
            //     process.exit(1);
            //   }
            //   break;
            default:
                console.log(chalk.red(`scaffold not found!`));
                break;
        }
    }
}