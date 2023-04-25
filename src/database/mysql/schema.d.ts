import Table from "./table";
declare class Schema {
    create(name: string, cb: (table: typeof Table) => void): Promise<void>;
    table(name: string, cb: (table: typeof Table) => void): Promise<void>;
    dropIfExists(name: string): Promise<void>;
}
declare const _default: Schema;
export default _default;
