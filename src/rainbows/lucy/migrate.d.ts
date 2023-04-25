export default class migrate {
    handler(): Promise<void>;
    rollback(): Promise<any>;
    finally(argv: {
        rollback: boolean;
    }): Promise<void>;
}
