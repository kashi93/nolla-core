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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var fs_1 = __importDefault(require("fs"));
var prompts = require('prompts');
var createMigration = /** @class */ (function () {
    function createMigration() {
    }
    createMigration.prototype.handler = function () {
        return __awaiter(this, void 0, void 0, function () {
            var migrationName, tableName, operationType, argv;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.migrationName()];
                    case 1:
                        migrationName = _a.sent();
                        if (migrationName == null)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.tableName()];
                    case 2:
                        tableName = _a.sent();
                        if (tableName == null)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.operationType()];
                    case 3:
                        operationType = _a.sent();
                        if (operationType == null)
                            return [2 /*return*/];
                        argv = {
                            name: migrationName
                        };
                        if (operationType == "create") {
                            argv.create = tableName;
                        }
                        if (operationType == "outer") {
                            argv.table = tableName;
                        }
                        this.finally(argv);
                        return [2 /*return*/];
                }
            });
        });
    };
    createMigration.prototype.operationType = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prompts({
                            type: 'select',
                            name: 'operationType',
                            message: 'Please choose operation type',
                            choices: [
                                { title: 'Create', value: "create" },
                                { title: 'Outer', value: "outer" },
                            ],
                            initial: 1
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.operationType];
                }
            });
        });
    };
    createMigration.prototype.tableName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'tableName',
                            message: "Database table name",
                            validate: function (value) {
                                if (value.trim().length < 1)
                                    return "Database table name is required";
                                if (!Number.isNaN(parseInt(String(value))) || !Number.isNaN(parseInt(String(value))))
                                    return "Invalid name!";
                                return true;
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.tableName];
                }
            });
        });
    };
    createMigration.prototype.migrationName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'migrationName',
                            message: "Database migration name",
                            validate: function (value) {
                                if (value.trim().length < 1)
                                    return "Database migration name is required";
                                if (!Number.isNaN(parseInt(String(value))) || !Number.isNaN(parseInt(String(value))))
                                    return "Invalid name!";
                                return true;
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.migrationName];
                }
            });
        });
    };
    createMigration.prototype.finally = function (argv) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var path, p, m, fileName;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        path = require("path");
                        p = "".concat(path.dirname((_a = require.main) === null || _a === void 0 ? void 0 : _a.filename), "/migrations/");
                        m = null;
                        fileName = "";
                        if (!(String(argv.name || argv.create || argv.table).trim().length > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, fs_1.default.promises
                                .readFile(node_path("nolla-core/src/template/migrations.txt"), "utf-8")
                                .then(function (t) {
                                return t
                                    .replace(/{table_name}/g, "".concat(argv.table || argv.create || argv.name))
                                    .replace(/{operation}/g, String(argv.table || "").trim().length < 1 ? "create" : "table")
                                    .replace(/{down_scalfold}/g, String(argv.table || "").trim().length < 1
                                    ? "await Schema.dropIfExists(\"".concat(argv.table || argv.create || argv.name, "\")")
                                    : "//")
                                    .replace(/{table_scalfold}/g, String(argv.table || "").trim().length < 1 ? "table.id();" : "//");
                            })];
                    case 1:
                        m = _b.sent();
                        fileName = "".concat(new Date().getTime(), "_").concat(argv.name);
                        _b.label = 2;
                    case 2:
                        if (!(m != null)) return [3 /*break*/, 4];
                        return [4 /*yield*/, fs_1.default.promises.writeFile("".concat(p).concat(fileName, ".ts"), m, "utf-8")];
                    case 3:
                        _b.sent();
                        console.log(chalk_1.default.green("Created Migration: ".concat(p).concat(fileName)));
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return createMigration;
}());
exports.default = createMigration;
