import chalk from 'chalk';
import fs from 'fs';
const prompts = require('prompts');

export default class createModel {
    async handler() {
        const modelName = await this.modelName();
        if (modelName == null) return;
        const tableName = await this.tableName();
        if (tableName == null) return;
        this.finally({class:modelName,table_name:tableName});
    }

    async modelName() {
        const response = await prompts({
            type: 'text',
            name: 'modelName',
            message: `Name of model`,
            validate: (value: string) => {
                if (value.trim().length < 1) return `Name of model is required`
                if (!Number.isNaN(parseInt(String(value))) || !Number.isNaN(parseInt(String(value)))) return "Invalid name!"

                return true;
            }
        });

        return response.modelName;
    }

    async tableName() {
        const response = await prompts({
            type: 'text',
            name: 'tableName',
            message: `Name of database table`,
            validate: (value: string) => {
                if (value.trim().length < 1) return `Name of database table is required`
                if (!Number.isNaN(parseInt(String(value))) || !Number.isNaN(parseInt(String(value)))) return "Invalid name!"

                return true;
            }
        });

        return response.tableName;
    }

    async finally(argv: { class: string, table_name: string }) {
        const path = require("path");
        const p = `${path.dirname(require.main?.filename)}/app/models/`;
        let m = null;

        if (
            !Number.isNaN(parseInt(String(argv.class))) ||
            !Number.isNaN(parseInt(String(argv.table_name)))
        ) {
            console.log(chalk.red("Invalid name!"));
            return;
        }

        if (argv.class == "model" || argv.table_name == "model") {
            console.log(chalk.red("Invalid name!"));
            return;
        }

        const models = await fs.promises.readdir(p);

        for await (const model of models) {
            if (`${String(argv.class).toLowerCase()}.ts` == model) {
                console.log(chalk.red(`Model ${argv.class} already exist!`));
                return;
            }
        }

        if (argv.class != "" && argv.table_name != "") {
            m = await fs.promises
                .readFile(
                    node_path(`nolla-core/src/template/model.template.txt`),
                    "utf-8"
                )
                .then((t) =>
                    t.replace(/{table_name}/g, `${argv.table_name}`).replace(
                        /ModelTemplate/g,
                        `${String(argv.class)
                            .replace(/\s(.)/g, function ($1) {
                                return $1.toUpperCase();
                            })
                            .replace(/\s/g, "")
                            .replace(/^(.)/, function ($1) {
                                return $1.toLowerCase();
                            })}`
                    )
                );
        }

        if (m != null) {
            await fs.promises.writeFile(
                `${p}${String(argv.class)
                    .replace(/\s(.)/g, function ($1) {
                        return $1.toUpperCase();
                    })
                    .replace(/\s/g, "")
                    .replace(/^(.)/, function ($1) {
                        return $1.toLowerCase();
                    })}.ts`,
                m,
                "utf-8"
            );

            console.log(
                chalk.green(
                    `Created Model: ${String(argv.class)
                        .replace(/\s(.)/g, function ($1) {
                            return $1.toUpperCase();
                        })
                        .replace(/\s/g, "")
                        .replace(/^(.)/, function ($1) {
                            return $1.toLowerCase();
                        })}.ts`
                )
            );
        }
    }
}