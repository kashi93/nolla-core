import fs from 'fs';
import { checkMysqlTableExist } from '../checkMysqlTableExist';
import migrationModel from '../../database/mysql/model/migration.model';
import chalk from 'chalk';
const prompts = require('prompts');

export default class migrate {
    async handler() {
        const rollback = await this.rollback();
        if (rollback == null) return;
        this.finally({ rollback: rollback })
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

    async finally(argv: { rollback: boolean }) {

        const path = require("path");

        if ((await config("database.default")) == "mysql") {
            if (!(await checkMysqlTableExist("migrations"))) {
                const Migration = require(node_path("nolla-core/src/database/mysql/migrations/000000_migrations"));
                
                await Migration.up();
                await migrationModel.create({
                    migration: "000000_migrations",
                });
            }
        }

        const p = `${path.dirname(require.main?.filename)}/migrations/`;
        const migrations = await fs.promises.readdir(p);

        for await (const migrate of migrations) {
            const { default: Migration } = require(`${p}/${migrate}`);
            const name = migrate.split(".");
            name.pop();
            if (!argv.rollback) {
                if (
                    (await migrationModel
                        .where("migration", "=", name.join(""))
                        .first()) == null
                ) {
                    await Migration.up();
                    await migrationModel.create({
                        migration: name.join(""),
                    });
                }
            } else {
                const m1 = require(node_path("nolla-core/src/database/mysql/migrations/000000_migrations"));
                await m1.down();
                await Migration.down();
            }
        }
        console.log(chalk.green(`Migrations successfully`));
    }
}