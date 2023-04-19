import chalk from 'chalk';
import fs from 'fs';

const prompts = require('prompts');

export default class createMigration {
    async handler() {
        const migrationName = await this.migrationName();
        if (migrationName == null) return;
        const tableName = await this.tableName();
        if (tableName == null) return;
        const operationType = await this.operationType();
        if (operationType == null) return;

        const argv: { name: string, create?: string, table?: string } = {
            name: migrationName
        };

        if (operationType == "create") {
            argv.create = tableName;
        }

        if (operationType == "outer") {
            argv.table = tableName;
        }

        this.finally(argv);
    }

    async operationType(): Promise<"create" | "outer" | undefined> {
        const response = await prompts({
            type: 'select',
            name: 'operationType',
            message: 'Please choose operation type',
            choices: [
                { title: 'Create', value: "create" },
                { title: 'Outer', value: "outer" },
            ],
            initial: 1
        });

        return response.operationType;
    }

    async tableName() {
        const response = await prompts({
            type: 'text',
            name: 'tableName',
            message: `Database table name`,
            validate: (value: string) => {
                if (value.trim().length < 1) return `Database table name is required`
                if (!Number.isNaN(parseInt(String(value))) || !Number.isNaN(parseInt(String(value)))) return "Invalid name!"

                return true;
            }
        });

        return response.tableName;
    }

    async migrationName() {
        const response = await prompts({
            type: 'text',
            name: 'migrationName',
            message: `Database migration name`,
            validate: (value: string) => {
                if (value.trim().length < 1) return `Database migration name is required`
                if (!Number.isNaN(parseInt(String(value))) || !Number.isNaN(parseInt(String(value)))) return "Invalid name!"

                return true;
            }
        });

        return response.migrationName;
    }

    async finally(argv: { name: string, create?: string, table?: string }) {
        const path = require("path");
        const p = `${path.dirname(require.main?.filename)}/migrations/`;
        let m = null;
        let fileName = "";

        if (String(argv.name || argv.create || argv.table).trim().length > 0) {
            m = await fs.promises
                .readFile(
                    node_path(`nolla-core/src/template/migrations.txt`),
                    "utf-8"
                )
                .then((t) =>
                    t
                        .replace(
                            /{table_name}/g,
                            `${argv.table || argv.create || argv.name}`
                        )
                        .replace(
                            /{operation}/g,
                            String(argv.table || "").trim().length < 1 ? "create" : "table"
                        )
                        .replace(
                            /{down_scalfold}/g,
                            String(argv.table || "").trim().length < 1
                                ? `await Schema.dropIfExists("${argv.table || argv.create || argv.name
                                }")`
                                : "//"
                        )
                        .replace(
                            /{table_scalfold}/g,
                            String(argv.table || "").trim().length < 1 ? "table.id();" : "//"
                        )
                );
            fileName = `${new Date().getTime()}_${argv.name}`;
        }

        if (m != null) {
            await fs.promises.writeFile(`${p}${fileName}.ts`, m, "utf-8");
            console.log(chalk.green(`Created Migration: ${p}${fileName}`));
        }
    }
}