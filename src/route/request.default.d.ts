import { Request, File } from "../nolla-core";
export default class RequestDefault {
    [key: string]: any;
    generateRequest(req: Request): void;
    input(field: string): any;
    file(field: string): File | null;
    all(): any;
}
