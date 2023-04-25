export default class createModel {
    handler(): Promise<void>;
    modelName(): Promise<any>;
    tableName(): Promise<any>;
    finally(argv: {
        class: string;
        table_name: string;
    }): Promise<void>;
}
