import { Connection } from "mysql";
declare class mysql {
    open(): Promise<Connection>;
    close(con: Connection): void;
    query(query: string): Promise<unknown>;
    execute<T>(con: Connection, query: string): Promise<T>;
}
export default mysql;
