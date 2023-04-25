import { Express } from "express";
export default class RouteRegister {
    middlewares: string[];
    prefixs: string[];
    controllerNamespaces: string[];
    initializations: ((app: Express) => void)[];
    register(): Promise<void>;
    get(app: Express, url: string, controller: string | Function, middlewareList: string[]): Promise<void>;
    post(app: Express, url: string, controller: string | Function, middlewareList: string[]): Promise<void>;
    initialize(app: Express): Promise<void>;
}
