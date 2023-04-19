import chalk from "chalk";
import fs from "fs";

const prompts = require('prompts');

export default class createController {
    async handler() {
        const controllerName = await this.controllerName();
        if (controllerName == null) return;
        this.finally({ name: controllerName })
    }

    async controllerName() {
        const response = await prompts({
            type: 'text',
            name: 'controllerName',
            message: `Name of controller`,
            validate: (value: string) => {
                if (value.trim().length < 1) return `Name of controller is required`
                if (!Number.isNaN(parseInt(String(value))) || !Number.isNaN(parseInt(String(value)))) return "Invalid name!"
                if (value == "controller") return "Invalid name!"

                return true;
            }
        });

        return response.controllerName;
    }

    async finally(argv: { name: string }) {
        const path = require("path");
        let p = `${path.dirname(require.main?.filename)}/app/controllers/`;
        const arr1 = String(argv.name).split("/");
        const con = arr1[arr1.length - 1];
        let m = null;
        let condir = "./";
        let typesdir = "../..";
        arr1.pop();

        if (
            !Number.isNaN(parseInt(String(con))) ||
            !Number.isNaN(parseInt(String(con)))
        ) {
            console.log(chalk.red("Invalid name!"));
            return;
        }

        if (con == "controller") {
            console.log(chalk.red("Invalid name!"));
            return;
        }

        if (con.trim().length > 0) {
            for await (const dir of arr1) {
                typesdir += "/..";
                condir += "../";
                p += dir.toLocaleLowerCase() + "/";
                fs.promises.mkdir(p);
            }

            m = await fs.promises
                .readFile(
                    node_path(`nolla-core/src/template/controller.template.txt`),
                    "utf-8"
                )
                .then((t) =>
                    t
                        .replace(
                            /ControllerTemplate/g,
                            `${con
                                .replace(/\s(.)/g, function ($1) {
                                    return $1.toUpperCase();
                                })
                                .replace(/\s/g, "")
                                .replace(/^(.)/, function ($1) {
                                    return $1.toLowerCase();
                                })}`
                        )
                        .replace(/con_dir/g, `${condir}controller`)
                        .replace(/types_dir/g, typesdir)
                );
        }

        if (m != null) {
            try {
                await fs.promises.open(
                    `${p}${String(con)
                        .replace(/\s(.)/g, function ($1) {
                            return $1.toUpperCase();
                        })
                        .replace(/\s/g, "")
                        .replace(/^(.)/, function ($1) {
                            return $1.toLowerCase();
                        })}.ts`,
                    "r"
                );
                console.log(chalk.red(`Controller ${con} already exist!`));
            } catch (error) {
                await fs.promises.writeFile(
                    `${p}${String(con)
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
                        `Created Controller: ${String(con)
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
}