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
var chalk_1 = __importDefault(require("chalk"));
var fs_1 = __importDefault(require("fs"));
var prompts = require('prompts');
var createController = /** @class */ (function () {
    function createController() {
    }
    createController.prototype.handler = function () {
        return __awaiter(this, void 0, void 0, function () {
            var controllerName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.controllerName()];
                    case 1:
                        controllerName = _a.sent();
                        if (controllerName == null)
                            return [2 /*return*/];
                        this.finally({ name: controllerName });
                        return [2 /*return*/];
                }
            });
        });
    };
    createController.prototype.controllerName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'controllerName',
                            message: "Name of controller",
                            validate: function (value) {
                                if (value.trim().length < 1)
                                    return "Name of controller is required";
                                if (!Number.isNaN(parseInt(String(value))) || !Number.isNaN(parseInt(String(value))))
                                    return "Invalid name!";
                                if (value == "controller")
                                    return "Invalid name!";
                                return true;
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.controllerName];
                }
            });
        });
    };
    createController.prototype.finally = function (argv) {
        var _a, e_1, _b, _c;
        var _d;
        return __awaiter(this, void 0, void 0, function () {
            var path, p, arr1, con, m, condir, typesdir, _e, arr1_1, arr1_1_1, dir, e_1_1, error_1;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        path = require("path");
                        p = "".concat(path.dirname((_d = require.main) === null || _d === void 0 ? void 0 : _d.filename), "/app/controllers/");
                        arr1 = String(argv.name).split("/");
                        con = arr1[arr1.length - 1];
                        m = null;
                        condir = "./";
                        typesdir = "../..";
                        arr1.pop();
                        if (!Number.isNaN(parseInt(String(con))) ||
                            !Number.isNaN(parseInt(String(con)))) {
                            console.log(chalk_1.default.red("Invalid name!"));
                            return [2 /*return*/];
                        }
                        if (con == "controller") {
                            console.log(chalk_1.default.red("Invalid name!"));
                            return [2 /*return*/];
                        }
                        if (!(con.trim().length > 0)) return [3 /*break*/, 14];
                        _f.label = 1;
                    case 1:
                        _f.trys.push([1, 6, 7, 12]);
                        _e = true, arr1_1 = __asyncValues(arr1);
                        _f.label = 2;
                    case 2: return [4 /*yield*/, arr1_1.next()];
                    case 3:
                        if (!(arr1_1_1 = _f.sent(), _a = arr1_1_1.done, !_a)) return [3 /*break*/, 5];
                        _c = arr1_1_1.value;
                        _e = false;
                        try {
                            dir = _c;
                            typesdir += "/..";
                            condir += "../";
                            p += dir.toLocaleLowerCase() + "/";
                            fs_1.default.promises.mkdir(p);
                        }
                        finally {
                            _e = true;
                        }
                        _f.label = 4;
                    case 4: return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 12];
                    case 6:
                        e_1_1 = _f.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 12];
                    case 7:
                        _f.trys.push([7, , 10, 11]);
                        if (!(!_e && !_a && (_b = arr1_1.return))) return [3 /*break*/, 9];
                        return [4 /*yield*/, _b.call(arr1_1)];
                    case 8:
                        _f.sent();
                        _f.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 11: return [7 /*endfinally*/];
                    case 12: return [4 /*yield*/, fs_1.default.promises
                            .readFile(node_path("nolla-core/src/template/controller.template.txt"), "utf-8")
                            .then(function (t) {
                            return t
                                .replace(/ControllerTemplate/g, "".concat(con
                                .replace(/\s(.)/g, function ($1) {
                                return $1.toUpperCase();
                            })
                                .replace(/\s/g, "")
                                .replace(/^(.)/, function ($1) {
                                return $1.toLowerCase();
                            })))
                                .replace(/con_dir/g, "".concat(condir, "controller"))
                                .replace(/types_dir/g, typesdir);
                        })];
                    case 13:
                        m = _f.sent();
                        _f.label = 14;
                    case 14:
                        if (!(m != null)) return [3 /*break*/, 19];
                        _f.label = 15;
                    case 15:
                        _f.trys.push([15, 17, , 19]);
                        return [4 /*yield*/, fs_1.default.promises.open("".concat(p).concat(String(con)
                                .replace(/\s(.)/g, function ($1) {
                                return $1.toUpperCase();
                            })
                                .replace(/\s/g, "")
                                .replace(/^(.)/, function ($1) {
                                return $1.toLowerCase();
                            }), ".ts"), "r")];
                    case 16:
                        _f.sent();
                        console.log(chalk_1.default.red("Controller ".concat(con, " already exist!")));
                        return [3 /*break*/, 19];
                    case 17:
                        error_1 = _f.sent();
                        return [4 /*yield*/, fs_1.default.promises.writeFile("".concat(p).concat(String(con)
                                .replace(/\s(.)/g, function ($1) {
                                return $1.toUpperCase();
                            })
                                .replace(/\s/g, "")
                                .replace(/^(.)/, function ($1) {
                                return $1.toLowerCase();
                            }), ".ts"), m, "utf-8")];
                    case 18:
                        _f.sent();
                        console.log(chalk_1.default.green("Created Controller: ".concat(String(con)
                            .replace(/\s(.)/g, function ($1) {
                            return $1.toUpperCase();
                        })
                            .replace(/\s/g, "")
                            .replace(/^(.)/, function ($1) {
                            return $1.toLowerCase();
                        }), ".ts")));
                        return [3 /*break*/, 19];
                    case 19: return [2 /*return*/];
                }
            });
        });
    };
    return createController;
}());
exports.default = createController;
