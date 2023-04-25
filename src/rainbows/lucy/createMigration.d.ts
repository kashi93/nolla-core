export default class createMigration {
    handler(): Promise<void>;
    operationType(): Promise<"create" | "outer" | undefined>;
    tableName(): Promise<any>;
    migrationName(): Promise<any>;
    finally(argv: {
        name: string;
        create?: string;
        table?: string;
    }): Promise<void>;
}
