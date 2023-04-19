"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var routeCollection_1 = require("./routeCollection");
var responseJsonSerialize_1 = __importDefault(require("./responseJsonSerialize"));
var route_default_service_1 = __importDefault(require("../providers/route.default.service"));
var RouteRegister = /** @class */ (function () {
    function RouteRegister() {
        this.middlewares = [];
        this.prefixs = [];
        this.controllerNamespaces = [];
        this.initializations = [];
    }
    RouteRegister.prototype.register = function () {
        var _a, e_1, _b, _c, _d, e_2, _e, _f, _g, e_3, _h, _j;
        return __awaiter(this, void 0, void 0, function () {
            var _loop_1, this_1, _k, routeCollection_2, routeCollection_2_1, e_1_1;
            var _this = this;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        _l.trys.push([0, 6, 7, 12]);
                        _loop_1 = function () {
                            var route_1, controller_1, url_1, _o, _p, _q, prex, e_2_1, _r, _s, _t, u, e_3_1, middleware_1;
                            return __generator(this, function (_u) {
                                switch (_u.label) {
                                    case 0:
                                        _c = routeCollection_2_1.value;
                                        _k = false;
                                        _u.label = 1;
                                    case 1:
                                        _u.trys.push([1, , 26, 27]);
                                        route_1 = _c;
                                        if (route_1.startControllerNameSpace) {
                                            this_1.controllerNamespaces.push(route_1.controllerNameSpace);
                                        }
                                        if (route_1.startMiddleware) {
                                            this_1.middlewares.push(route_1.middleware);
                                        }
                                        if (route_1.startPrefix) {
                                            this_1.prefixs.push(route_1.prefix);
                                        }
                                        if (!(route_1.method != null)) return [3 /*break*/, 25];
                                        url_1 = [];
                                        _u.label = 2;
                                    case 2:
                                        _u.trys.push([2, 7, 8, 13]);
                                        _o = true, _p = (e_2 = void 0, __asyncValues(this_1.prefixs));
                                        _u.label = 3;
                                    case 3: return [4 /*yield*/, _p.next()];
                                    case 4:
                                        if (!(_q = _u.sent(), _d = _q.done, !_d)) return [3 /*break*/, 6];
                                        _f = _q.value;
                                        _o = false;
                                        try {
                                            prex = _f;
                                            if (prex.trim().length > 0) {
                                                url_1.push(prex);
                                            }
                                        }
                                        finally {
                                            _o = true;
                                        }
                                        _u.label = 5;
                                    case 5: return [3 /*break*/, 3];
                                    case 6: return [3 /*break*/, 13];
                                    case 7:
                                        e_2_1 = _u.sent();
                                        e_2 = { error: e_2_1 };
                                        return [3 /*break*/, 13];
                                    case 8:
                                        _u.trys.push([8, , 11, 12]);
                                        if (!(!_o && !_d && (_e = _p.return))) return [3 /*break*/, 10];
                                        return [4 /*yield*/, _e.call(_p)];
                                    case 9:
                                        _u.sent();
                                        _u.label = 10;
                                    case 10: return [3 /*break*/, 12];
                                    case 11:
                                        if (e_2) throw e_2.error;
                                        return [7 /*endfinally*/];
                                    case 12: return [7 /*endfinally*/];
                                    case 13:
                                        _u.trys.push([13, 18, 19, 24]);
                                        _r = true, _s = (e_3 = void 0, __asyncValues(route_1.url.split("/")));
                                        _u.label = 14;
                                    case 14: return [4 /*yield*/, _s.next()];
                                    case 15:
                                        if (!(_t = _u.sent(), _g = _t.done, !_g)) return [3 /*break*/, 17];
                                        _j = _t.value;
                                        _r = false;
                                        try {
                                            u = _j;
                                            if (u.trim().length > 0) {
                                                url_1.push(u);
                                            }
                                        }
                                        finally {
                                            _r = true;
                                        }
                                        _u.label = 16;
                                    case 16: return [3 /*break*/, 14];
                                    case 17: return [3 /*break*/, 24];
                                    case 18:
                                        e_3_1 = _u.sent();
                                        e_3 = { error: e_3_1 };
                                        return [3 /*break*/, 24];
                                    case 19:
                                        _u.trys.push([19, , 22, 23]);
                                        if (!(!_r && !_g && (_h = _s.return))) return [3 /*break*/, 21];
                                        return [4 /*yield*/, _h.call(_s)];
                                    case 20:
                                        _u.sent();
                                        _u.label = 21;
                                    case 21: return [3 /*break*/, 23];
                                    case 22:
                                        if (e_3) throw e_3.error;
                                        return [7 /*endfinally*/];
                                    case 23: return [7 /*endfinally*/];
                                    case 24:
                                        if (Array.isArray(route_1.argv)) {
                                            controller_1 = "".concat(this_1.controllerNamespaces).concat(route_1.argv[0], "@").concat(route_1.argv[1]);
                                        }
                                        else {
                                            controller_1 = route_1.argv;
                                        }
                                        if (routeList.filter(function (r) { return r.url == "/" + url_1.join("/") && r.method == route_1.method; }).length < 1) {
                                            middleware_1 = __spreadArray([], this_1.middlewares, true);
                                            routeList.push({
                                                name: route_1.name,
                                                url: "/" + url_1.join("/"),
                                                method: route_1.method,
                                                controller: controller_1,
                                                middleware: middleware_1,
                                            });
                                            this_1.initializations.push(function (app) {
                                                switch (route_1.method) {
                                                    case "GET":
                                                        _this.get(app, "/" + url_1.join("/"), controller_1, middleware_1);
                                                        break;
                                                    case "POST":
                                                        _this.post(app, "/" + url_1.join("/"), controller_1, middleware_1);
                                                        break;
                                                    default:
                                                        break;
                                                }
                                            });
                                        }
                                        _u.label = 25;
                                    case 25:
                                        if (route_1.endControllerNameSpace) {
                                            this_1.controllerNamespaces.pop();
                                        }
                                        if (route_1.endPrefix) {
                                            this_1.prefixs.pop();
                                        }
                                        if (route_1.endMiddleware) {
                                            this_1.middlewares.pop();
                                        }
                                        return [3 /*break*/, 27];
                                    case 26:
                                        _k = true;
                                        return [7 /*endfinally*/];
                                    case 27: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _k = true, routeCollection_2 = __asyncValues(routeCollection_1.routeCollection);
                        _l.label = 1;
                    case 1: return [4 /*yield*/, routeCollection_2.next()];
                    case 2:
                        if (!(routeCollection_2_1 = _l.sent(), _a = routeCollection_2_1.done, !_a)) return [3 /*break*/, 5];
                        return [5 /*yield**/, _loop_1()];
                    case 3:
                        _l.sent();
                        _l.label = 4;
                    case 4: return [3 /*break*/, 1];
                    case 5: return [3 /*break*/, 12];
                    case 6:
                        e_1_1 = _l.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 12];
                    case 7:
                        _l.trys.push([7, , 10, 11]);
                        if (!(!_k && !_a && (_b = routeCollection_2.return))) return [3 /*break*/, 9];
                        return [4 /*yield*/, _b.call(routeCollection_2)];
                    case 8:
                        _l.sent();
                        _l.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 11: return [7 /*endfinally*/];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    RouteRegister.prototype.get = function (app, url, controller, middlewareList) {
        var _a, middlewareList_1, middlewareList_1_1;
        var _b, e_4, _c, _d;
        var _e;
        return __awaiter(this, void 0, void 0, function () {
            var path, middlewares, m, _m, p, e_4_1;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        path = require("path");
                        middlewares = [];
                        _f.label = 1;
                    case 1:
                        _f.trys.push([1, 9, 10, 15]);
                        _a = true, middlewareList_1 = __asyncValues(middlewareList);
                        _f.label = 2;
                    case 2: return [4 /*yield*/, middlewareList_1.next()];
                    case 3:
                        if (!(middlewareList_1_1 = _f.sent(), _b = middlewareList_1_1.done, !_b)) return [3 /*break*/, 8];
                        _d = middlewareList_1_1.value;
                        _a = false;
                        _f.label = 4;
                    case 4:
                        _f.trys.push([4, , 6, 7]);
                        m = _d;
                        return [4 /*yield*/, config("app.routeMiddleware")];
                    case 5:
                        _m = (_f.sent());
                        if (_m[m] == null) {
                            throw new Error("Route middleware ".concat(m, " does not exist or does not register"));
                        }
                        p = require("".concat(path.dirname((_e = require.main) === null || _e === void 0 ? void 0 : _e.filename), "/").concat(_m[m])).default;
                        middlewares.push(p);
                        return [3 /*break*/, 7];
                    case 6:
                        _a = true;
                        return [7 /*endfinally*/];
                    case 7: return [3 /*break*/, 2];
                    case 8: return [3 /*break*/, 15];
                    case 9:
                        e_4_1 = _f.sent();
                        e_4 = { error: e_4_1 };
                        return [3 /*break*/, 15];
                    case 10:
                        _f.trys.push([10, , 13, 14]);
                        if (!(!_a && !_b && (_c = middlewareList_1.return))) return [3 /*break*/, 12];
                        return [4 /*yield*/, _c.call(middlewareList_1)];
                    case 11:
                        _f.sent();
                        _f.label = 12;
                    case 12: return [3 /*break*/, 14];
                    case 13:
                        if (e_4) throw e_4.error;
                        return [7 /*endfinally*/];
                    case 14: return [7 /*endfinally*/];
                    case 15:
                        app.get.apply(app, __spreadArray(__spreadArray([url], middlewares, false), [function (req, res, next) {
                                var _a;
                                return __awaiter(this, void 0, void 0, function () {
                                    var cb, p, c, cb2, _b, _c, error_1, error_2;
                                    return __generator(this, function (_d) {
                                        switch (_d.label) {
                                            case 0:
                                                _d.trys.push([0, 13, , 14]);
                                                cb = null;
                                                if (!(typeof controller == "string")) return [3 /*break*/, 2];
                                                p = require("".concat(path.dirname((_a = require.main) === null || _a === void 0 ? void 0 : _a.filename)).concat(controller.split("@")[0]));
                                                c = new p();
                                                return [4 /*yield*/, c[controller.split("@")[1]].apply(c, new route_default_service_1.default().params(req, res))];
                                            case 1:
                                                cb = _d.sent();
                                                return [3 /*break*/, 4];
                                            case 2: return [4 /*yield*/, controller.apply(void 0, new route_default_service_1.default().params(req, res))];
                                            case 3:
                                                cb = _d.sent();
                                                _d.label = 4;
                                            case 4:
                                                if (typeof cb == "function") {
                                                    cb2 = cb();
                                                    if (cb2.data != null && cb2.code != null) {
                                                        return [2 /*return*/, res.status(cb2.code).json(cb2.data)];
                                                    }
                                                    else if (cb2.view != null && cb2.data != null) {
                                                        return [2 /*return*/, res.render(cb2.view, __assign({ layout: false }, cb2.data))];
                                                    }
                                                }
                                                _d.label = 5;
                                            case 5:
                                                _d.trys.push([5, 11, , 12]);
                                                if (!(cb != null)) return [3 /*break*/, 9];
                                                if (!(typeof cb == "object")) return [3 /*break*/, 7];
                                                _c = (_b = res.status(200)).send;
                                                return [4 /*yield*/, responseJsonSerialize_1.default.serialize(cb)];
                                            case 6:
                                                _c.apply(_b, [_d.sent()]);
                                                return [3 /*break*/, 8];
                                            case 7:
                                                res.status(200).send(cb.toString());
                                                _d.label = 8;
                                            case 8: return [3 /*break*/, 10];
                                            case 9:
                                                res.status(200).send("");
                                                _d.label = 10;
                                            case 10: return [3 /*break*/, 12];
                                            case 11:
                                                error_1 = _d.sent();
                                                return [3 /*break*/, 12];
                                            case 12: return [3 /*break*/, 14];
                                            case 13:
                                                error_2 = _d.sent();
                                                next(error_2);
                                                return [3 /*break*/, 14];
                                            case 14: return [2 /*return*/];
                                        }
                                    });
                                });
                            }], false));
                        return [2 /*return*/];
                }
            });
        });
    };
    RouteRegister.prototype.post = function (app, url, controller, middlewareList) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var path, middlewares, _i, middlewareList_2, m, _m, p;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        path = require("path");
                        middlewares = [];
                        _i = 0, middlewareList_2 = middlewareList;
                        _b.label = 1;
                    case 1:
                        if (!(_i < middlewareList_2.length)) return [3 /*break*/, 4];
                        m = middlewareList_2[_i];
                        return [4 /*yield*/, config("app.routeMiddleware")];
                    case 2:
                        _m = (_b.sent());
                        if (_m[m] == null) {
                            throw new Error("Route middleware ".concat(m, " does not exist or does not register"));
                        }
                        p = require("".concat(path.dirname((_a = require.main) === null || _a === void 0 ? void 0 : _a.filename), "/").concat(_m[m])).default;
                        middlewares.push(p);
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        app.post.apply(app, __spreadArray(__spreadArray([url], middlewares, false), [function (req, res, next) {
                                var _a;
                                return __awaiter(this, void 0, void 0, function () {
                                    var cb, p, c, cb2, _b, _c, error_3, error_4;
                                    return __generator(this, function (_d) {
                                        switch (_d.label) {
                                            case 0:
                                                _d.trys.push([0, 13, , 14]);
                                                cb = null;
                                                if (!(typeof controller == "string")) return [3 /*break*/, 2];
                                                p = require("".concat(path.dirname((_a = require.main) === null || _a === void 0 ? void 0 : _a.filename)).concat(controller.split("@")[0]));
                                                c = new p();
                                                return [4 /*yield*/, c[controller.split("@")[1]].apply(c, new route_default_service_1.default().params(req, res))];
                                            case 1:
                                                cb = _d.sent();
                                                return [3 /*break*/, 4];
                                            case 2: return [4 /*yield*/, controller.apply(void 0, new route_default_service_1.default().params(req, res))];
                                            case 3:
                                                cb = _d.sent();
                                                _d.label = 4;
                                            case 4:
                                                if (typeof cb == "function") {
                                                    cb2 = cb();
                                                    if (cb2.data != null && cb2.code != null) {
                                                        return [2 /*return*/, res.status(cb2.code).json(cb2.data)];
                                                    }
                                                    else if (cb2.view != null && cb2.data != null) {
                                                        return [2 /*return*/, res.render(cb2.view, __assign({ layout: false }, cb2.data))];
                                                    }
                                                }
                                                _d.label = 5;
                                            case 5:
                                                _d.trys.push([5, 11, , 12]);
                                                if (!(cb != null)) return [3 /*break*/, 9];
                                                if (!(typeof cb == "object")) return [3 /*break*/, 7];
                                                _c = (_b = res.status(200)).send;
                                                return [4 /*yield*/, responseJsonSerialize_1.default.serialize(cb)];
                                            case 6:
                                                _c.apply(_b, [_d.sent()]);
                                                return [3 /*break*/, 8];
                                            case 7:
                                                res.status(200).send(cb.toString());
                                                _d.label = 8;
                                            case 8: return [3 /*break*/, 10];
                                            case 9:
                                                res.status(200).send("");
                                                _d.label = 10;
                                            case 10: return [3 /*break*/, 12];
                                            case 11:
                                                error_3 = _d.sent();
                                                return [3 /*break*/, 12];
                                            case 12: return [3 /*break*/, 14];
                                            case 13:
                                                error_4 = _d.sent();
                                                next(error_4);
                                                return [3 /*break*/, 14];
                                            case 14: return [2 /*return*/];
                                        }
                                    });
                                });
                            }], false));
                        return [2 /*return*/];
                }
            });
        });
    };
    RouteRegister.prototype.initialize = function (app) {
        var _a, e_5, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _d, _e, _f, i, e_5_1;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _g.trys.push([0, 5, 6, 11]);
                        _d = true, _e = __asyncValues(this.initializations);
                        _g.label = 1;
                    case 1: return [4 /*yield*/, _e.next()];
                    case 2:
                        if (!(_f = _g.sent(), _a = _f.done, !_a)) return [3 /*break*/, 4];
                        _c = _f.value;
                        _d = false;
                        try {
                            i = _c;
                            i(app);
                        }
                        finally {
                            _d = true;
                        }
                        _g.label = 3;
                    case 3: return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 11];
                    case 5:
                        e_5_1 = _g.sent();
                        e_5 = { error: e_5_1 };
                        return [3 /*break*/, 11];
                    case 6:
                        _g.trys.push([6, , 9, 10]);
                        if (!(!_d && !_a && (_b = _e.return))) return [3 /*break*/, 8];
                        return [4 /*yield*/, _b.call(_e)];
                    case 7:
                        _g.sent();
                        _g.label = 8;
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        if (e_5) throw e_5.error;
                        return [7 /*endfinally*/];
                    case 10: return [7 /*endfinally*/];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    return RouteRegister;
}());
exports.default = RouteRegister;
