export default class createController {
    handler(): Promise<void>;
    controllerName(): Promise<any>;
    finally(argv: {
        name: string;
    }): Promise<void>;
}
