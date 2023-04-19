"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var route_1 = __importDefault(require("../route/route"));
var path_1 = __importDefault(require("path"));
var RouteService = /** @class */ (function () {
    function RouteService() {
    }
    RouteService.prototype.boot = function (app) {
        this.register(app);
    };
    RouteService.prototype.register = function (app) {
        route_1.default.controllerNameSpace("/app/controllers/", function () { var _a; return require("".concat(path_1.default.dirname((_a = require.main) === null || _a === void 0 ? void 0 : _a.filename), "/routes/web")); });
    };
    return RouteService;
}());
exports.default = RouteService;
