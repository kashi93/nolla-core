import {
  Request as ExpressRequest,
  Response as ExpressResponse,
  NextFunction as ExpressNextFunction,
} from "express";

export interface File {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
  move: (publicPath?: string, name?: string) => Promise<string | null>;
}

export interface Request extends ExpressRequest {
  input?: (field: string) => any;
  all?: () => { [key: string]: any };
  $file?: (field: string) => File;
}

interface Response extends ExpressResponse { }
interface Next extends ExpressNextFunction { }

export type Rules =
  | "required"
  | "email"
  | "min:?"
  | `min:${number}`
  | `confirmation:${string}`
  | "nullable"
  | `mimes:${string}`
  | `max:${number}`
  | ((attr: string, val: any, fail: Function) => any);

export interface Rule {
  [field: string]: Rules[];
}

export interface Router {
  name: string;
  url: string;
  method: string;
  controller: string | Function;
  middleware: string[];
}

export interface RouteCollection {
  uuid: string;
  startControllerNameSpace: boolean;
  controllerNameSpace: string | null;
  endControllerNameSpace: boolean;
  startMiddleware: boolean;
  middleware: string | null;
  endMiddleware: boolean;
  startPrefix: boolean;
  prefix: string | null;
  endPrefix: boolean;
  url: string | null;
  argv: [controllerClassPath: string, method: string] | Function | null;
  method: "POST" | "GET" | null;
  name: string | null;
}

export interface TableConfig {
  nullable?: boolean;
  unique?: boolean;
  default?: any;
  after?: string;
  alterMode?: "ADD" | "MODIFY";
  precision?: number;
  scale?: number;
  length?: number
}

export interface SelectOption {
  question: string,
  options: string[],
  answers: string[],
  pointer: string,
  color: string
}

export interface MySqlTable {
  id: (column?: string) => void;
  double: (column: string, config?: TableConfig) => void;
  float: (column: string, config?: TableConfig) => void;
  timestamps: () => void;
  custom: (statement: string) => void;
  bigIncrements: (column: string, config?: TableConfig) => void;
  binary: (column: string, config?: TableConfig) => void
  boolean: (column: string, config?: TableConfig) => void
  char: (column: string, config?: TableConfig) => void
  dateTime: (column: string, config?: TableConfig) => void
  date: (column: string, config?: TableConfig) => void
  decimal: (column: string, config?: TableConfig) => void
  enum: (column: string, values: string[], config?: TableConfig) => void
  int: (column: string, config?: TableConfig) => void
  bigInt: (column: string, config?: TableConfig) => void
  unsignedBigInt: (column: string, config?: TableConfig) => void
  smallInt: (column: string, config?: TableConfig) => void
  unsignedSmallInt: (column: string, config?: TableConfig) => void
  tinyInt: (column: string, config?: TableConfig) => void
  unsignedTinyInt: (column: string, config?: TableConfig) => void
  string: (column: string, config?: TableConfig) => void
  longText: (column: string, config?: TableConfig) => void
  mediumText: (column: string, config?: TableConfig) => void
  timestamp: (column: string, config?: TableConfig) => void
  dropColumn: (column: string) => void
}

export const thisIsAModule = true;

declare global {
  var request: Request;
  var response: Response;
  var config: (con: string) => Promise<any>;
  var env: (con: string) => any;
  var errors: any[];
  var message: string | null;
  var errorHas: (field: string) => boolean;
  var clearFormValidationSession: () => void;
  var values: { [key: string]: any };
  var old: (field: string) => any;
  var clearFormValuesSession: () => void;
  var routeList: Router[];
  var route: (name: string, params?: { [key: string]: any }) => any;
  var sleep: (ms: number) => Promise<boolean>;
  var view: (path: string, data?: { [key: string]: any }) => Function;
  var auth: {
    user: () => { [key: string]: any } | null;
  };
  var storage_path: (path?: string) => string;
  var public_path: (path?: string) => string;
  var node_path: (path?: string) => string;
}
