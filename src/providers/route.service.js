"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var route_1 = __importDefault(require("../route/route"));
var RouteService = /** @class */ (function () {
    function RouteService() {
    }
    RouteService.prototype.boot = function (app) {
        this.register(app);
    };
    RouteService.prototype.register = function (app) {
        route_1.default.controllerNameSpace("/app/controllers/", function () {
            return require("".concat(process.cwd(), "/routes/web"));
        });
    };
    return RouteService;
}());
module.exports = RouteService;
