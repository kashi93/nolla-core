import yargs from "yargs";
export default yargs.command({
    command: "lucy",
    describe: "",
    builder: {},
    async handler(argv) {
        const prompts = require('prompts');
        const response = await prompts({
            type: 'select',
            name: 'lucy',
            message: 'Hello! How can I assist you today?',
            choices: [
                {
                    title: 'Create Controller',
                    description: 'Create a new controller class',
                    value: "createController"
                },
                {
                    title: 'Create Model',
                    description: 'Create a new model class',
                    value: "createModel"
                },
                {
                    title: 'Create Migration',
                    description: 'Create a new migration files',
                    value: "createMigration"
                },
                {
                    title: 'Migrate',
                    description: 'Run the database migrations',
                    value: "migrate"
                },
                {
                    title: 'Route List',
                    description: 'List all registered routes',
                    value: "routeListCommand"
                },
                {
                    title: 'Generate UI',
                    description: 'Generate front-end scaffolding for the application preset type (vue, react)',
                    value: 'generateUi'
                },
                {
                    title: 'Compile Resources',
                    description: 'Compile all resources/**/* to dist/resources/**/*',
                    value: 'compileResources'
                },
            ],
        });
        const lucy = response.lucy;

        if (lucy == null) return;

        const { default: r } = require(`../rainbows/lucy/${lucy}`)
        const c = new r();
        c.handler()
    },
});
