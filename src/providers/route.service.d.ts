import { Express } from "express";
declare class RouteService {
    boot(app?: Express): void;
    register(app?: Express): void;
}
export default RouteService;
