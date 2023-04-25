export default class generateUi {
    handler(): Promise<void>;
    chooseType(): Promise<any>;
    rollback(): Promise<any>;
    finally(argv: {
        type: string;
        rollback: boolean;
    }): Promise<void>;
}
