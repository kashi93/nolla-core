"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var ReactUiRollbackCommand = /** @class */ (function () {
    function ReactUiRollbackCommand() {
    }
    ReactUiRollbackCommand.prototype.handle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.js()];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.css()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.nodeModules()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.app()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.webpack()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.pack()];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ReactUiRollbackCommand.prototype.app = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var app, react_comment;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, fs_1.default.promises.readFile("".concat(path_1.default.dirname((_a = require.main) === null || _a === void 0 ? void 0 : _a.filename), "/resources/js/app.js"), "utf-8")];
                    case 1:
                        app = _c.sent();
                        react_comment = new RegExp("import \"./react/index\";");
                        app = app.replace(react_comment, "// import \"./react/index\";");
                        return [4 /*yield*/, fs_1.default.promises.writeFile("".concat(path_1.default.dirname((_b = require.main) === null || _b === void 0 ? void 0 : _b.filename), "/resources/js/app.js"), app, "utf-8")];
                    case 2:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReactUiRollbackCommand.prototype.nodeModules = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!fs_1.default.existsSync("".concat(process.cwd(), "/node_modules"))) return [3 /*break*/, 2];
                        return [4 /*yield*/, fs_1.default.promises.rm("".concat(process.cwd(), "/node_modules"), {
                                recursive: true,
                                force: true,
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 2: return [2 /*return*/, false];
                }
            });
        });
    };
    ReactUiRollbackCommand.prototype.pack = function () {
        var _a, e_1, _b, _c, _d, e_2, _e, _f;
        return __awaiter(this, void 0, void 0, function () {
            var pack, defPack, _g, _h, _j, key, _k, _l, _m, key1, e_2_1, e_1_1;
            return __generator(this, function (_o) {
                switch (_o.label) {
                    case 0:
                        pack = require("../package").default;
                        defPack = require("".concat(process.cwd(), "/package.json"));
                        _o.label = 1;
                    case 1:
                        _o.trys.push([1, 20, 21, 26]);
                        _g = true, _h = __asyncValues(Object.getOwnPropertyNames(pack));
                        _o.label = 2;
                    case 2: return [4 /*yield*/, _h.next()];
                    case 3:
                        if (!(_j = _o.sent(), _a = _j.done, !_a)) return [3 /*break*/, 19];
                        _c = _j.value;
                        _g = false;
                        _o.label = 4;
                    case 4:
                        _o.trys.push([4, , 17, 18]);
                        key = _c;
                        _o.label = 5;
                    case 5:
                        _o.trys.push([5, 10, 11, 16]);
                        _k = true, _l = (e_2 = void 0, __asyncValues(Object.getOwnPropertyNames(pack[key])));
                        _o.label = 6;
                    case 6: return [4 /*yield*/, _l.next()];
                    case 7:
                        if (!(_m = _o.sent(), _d = _m.done, !_d)) return [3 /*break*/, 9];
                        _f = _m.value;
                        _k = false;
                        try {
                            key1 = _f;
                            if (defPack[key][key1] != null) {
                                delete defPack[key][key1];
                            }
                        }
                        finally {
                            _k = true;
                        }
                        _o.label = 8;
                    case 8: return [3 /*break*/, 6];
                    case 9: return [3 /*break*/, 16];
                    case 10:
                        e_2_1 = _o.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 16];
                    case 11:
                        _o.trys.push([11, , 14, 15]);
                        if (!(!_k && !_d && (_e = _l.return))) return [3 /*break*/, 13];
                        return [4 /*yield*/, _e.call(_l)];
                    case 12:
                        _o.sent();
                        _o.label = 13;
                    case 13: return [3 /*break*/, 15];
                    case 14:
                        if (e_2) throw e_2.error;
                        return [7 /*endfinally*/];
                    case 15: return [7 /*endfinally*/];
                    case 16: return [3 /*break*/, 18];
                    case 17:
                        _g = true;
                        return [7 /*endfinally*/];
                    case 18: return [3 /*break*/, 2];
                    case 19: return [3 /*break*/, 26];
                    case 20:
                        e_1_1 = _o.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 26];
                    case 21:
                        _o.trys.push([21, , 24, 25]);
                        if (!(!_g && !_a && (_b = _h.return))) return [3 /*break*/, 23];
                        return [4 /*yield*/, _b.call(_h)];
                    case 22:
                        _o.sent();
                        _o.label = 23;
                    case 23: return [3 /*break*/, 25];
                    case 24:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 25: return [7 /*endfinally*/];
                    case 26: return [4 /*yield*/, fs_1.default.promises.writeFile("".concat(process.cwd(), "/package.json"), JSON.stringify(defPack, null, "\t"), "utf-8")];
                    case 27:
                        _o.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReactUiRollbackCommand.prototype.webpack = function () {
        return __awaiter(this, void 0, void 0, function () {
            var app;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fs_1.default.promises.readFile("".concat(process.cwd(), "/webpack.config.js"), "utf-8")];
                    case 1:
                        app = _a.sent();
                        app = app
                            .replace(/\/\/ module\.exports = webpack\.react\(\);/i, "module.exports = webpack.react();")
                            .replace(/module\.exports = webpack\.react\(\);/i, "// module.exports = webpack.react();");
                        return [4 /*yield*/, fs_1.default.promises.writeFile("".concat(process.cwd(), "/webpack.config.js"), app, "utf-8")];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReactUiRollbackCommand.prototype.js = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!fs_1.default.existsSync("".concat(path_1.default.dirname((_a = require.main) === null || _a === void 0 ? void 0 : _a.filename), "/resources/js/react"))) return [3 /*break*/, 2];
                        return [4 /*yield*/, fs_1.default.promises.rm("".concat(path_1.default.dirname((_b = require.main) === null || _b === void 0 ? void 0 : _b.filename), "/resources/js/react"), { recursive: true })];
                    case 1:
                        _c.sent();
                        return [2 /*return*/, true];
                    case 2: return [2 /*return*/, false];
                }
            });
        });
    };
    ReactUiRollbackCommand.prototype.css = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!fs_1.default.existsSync("".concat(path_1.default.dirname((_a = require.main) === null || _a === void 0 ? void 0 : _a.filename), "/resources/css/react"))) return [3 /*break*/, 2];
                        return [4 /*yield*/, fs_1.default.promises.rm("".concat(path_1.default.dirname((_b = require.main) === null || _b === void 0 ? void 0 : _b.filename), "/resources/css/react"), { recursive: true })];
                    case 1:
                        _c.sent();
                        return [2 /*return*/, true];
                    case 2: return [2 /*return*/, false];
                }
            });
        });
    };
    return ReactUiRollbackCommand;
}());
exports.default = new ReactUiRollbackCommand();
