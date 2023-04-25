import { Express, Response } from "express";
import { Request } from "../nolla-core";
import RequestDefault from "../route/request.default";
declare class RouteDefaultService extends RequestDefault {
    boot(app: Express): void;
    default(app: Express): void;
    catchExpressData(app: Express): void;
    log(app: Express): void;
    params(req: Request, res: Response): any[];
    _request(req: Request): Promise<void>;
    appendToRequest(req: any): any;
}
export default RouteDefaultService;
