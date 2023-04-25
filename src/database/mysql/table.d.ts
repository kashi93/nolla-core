import { MySqlTable, TableConfig } from "../../nolla-core";
export declare let params: string[];
export declare const resetParams: () => void;
declare class Table implements MySqlTable {
    id(column?: string): void;
    double(column: string, config?: TableConfig): void;
    float(column: string, config?: TableConfig): void;
    timestamps(): void;
    custom(statement: string): void;
    bigIncrements: (column: string, config?: TableConfig) => void;
    binary: (column: string, config?: TableConfig) => void;
    boolean: (column: string, config?: TableConfig) => void;
    char: (column: string, config?: TableConfig) => void;
    dateTime: (column: string, config?: TableConfig) => void;
    date: (column: string, config?: TableConfig) => void;
    decimal: (column: string, config?: TableConfig) => void;
    enum: (column: string, values: string[], config?: TableConfig) => void;
    int: (column: string, config?: TableConfig) => void;
    bigInt: (column: string, config?: TableConfig) => void;
    unsignedBigInt: (column: string, config?: TableConfig) => void;
    smallInt: (column: string, config?: TableConfig) => void;
    unsignedSmallInt: (column: string, config?: TableConfig) => void;
    tinyInt: (column: string, config?: TableConfig) => void;
    unsignedTinyInt: (column: string, config?: TableConfig) => void;
    string: (column: string, config?: TableConfig) => void;
    longText: (column: string, config?: TableConfig) => void;
    mediumText: (column: string, config?: TableConfig) => void;
    timestamp: (column: string, config?: TableConfig) => void;
    dropColumn: (column: string) => number;
}
declare const _default: Table;
export default _default;
