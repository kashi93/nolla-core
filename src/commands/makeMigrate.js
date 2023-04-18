"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var yargs_1 = __importDefault(require("yargs"));
var fs_1 = __importDefault(require("fs"));
var checkMysqlTableExist_1 = require("../rainbows/checkMysqlTableExist");
var migration_model_1 = __importDefault(require("../database/mysql/model/migration.model"));
var chalk_1 = __importDefault(require("chalk"));
exports.default = yargs_1.default.command({
    command: "migrate",
    describe: "Run the database migrations",
    builder: {
        rollback: {
            alias: "r",
            required: false,
            type: "boolean",
            default: false,
        },
    },
    handler: function (argv) {
        var _a, e_1, _b, _c;
        var _d;
        return __awaiter(this, void 0, void 0, function () {
            var path, Migration, p, migrations, _e, migrations_1, migrations_1_1, migrate, Migration, name_1, m1, e_1_1;
            return __generator(this, function (_f) {
                var _g;
                switch (_f.label) {
                    case 0:
                        path = require("path");
                        return [4 /*yield*/, config("database.default")];
                    case 1:
                        if (!((_f.sent()) == "mysql")) return [3 /*break*/, 6];
                        return [4 /*yield*/, (0, checkMysqlTableExist_1.checkMysqlTableExist)("migrations")];
                    case 2:
                        if (!!(_f.sent())) return [3 /*break*/, 6];
                        return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../database/mysql/migrations/000000_migrations")); })];
                    case 3:
                        Migration = (_f.sent()).default;
                        return [4 /*yield*/, Migration.up()];
                    case 4:
                        _f.sent();
                        return [4 /*yield*/, migration_model_1.default.create({
                                migration: "000000_migrations",
                            })];
                    case 5:
                        _f.sent();
                        _f.label = 6;
                    case 6:
                        p = "".concat(path.dirname((_d = require.main) === null || _d === void 0 ? void 0 : _d.filename), "/migrations/");
                        return [4 /*yield*/, fs_1.default.promises.readdir(p)];
                    case 7:
                        migrations = _f.sent();
                        _f.label = 8;
                    case 8:
                        _f.trys.push([8, 25, 26, 31]);
                        _e = true, migrations_1 = __asyncValues(migrations);
                        _f.label = 9;
                    case 9: return [4 /*yield*/, migrations_1.next()];
                    case 10:
                        if (!(migrations_1_1 = _f.sent(), _a = migrations_1_1.done, !_a)) return [3 /*break*/, 24];
                        _c = migrations_1_1.value;
                        _e = false;
                        _f.label = 11;
                    case 11:
                        _f.trys.push([11, , 22, 23]);
                        migrate = _c;
                        return [4 /*yield*/, (_g = "".concat(p, "/").concat(migrate), Promise.resolve().then(function () { return __importStar(require(_g)); }))];
                    case 12:
                        Migration = (_f.sent()).default;
                        name_1 = migrate.split(".");
                        name_1.pop();
                        if (!!argv.rollback) return [3 /*break*/, 17];
                        return [4 /*yield*/, migration_model_1.default
                                .where("migration", "=", name_1.join(""))
                                .first()];
                    case 13:
                        if (!((_f.sent()) == null)) return [3 /*break*/, 16];
                        return [4 /*yield*/, Migration.up()];
                    case 14:
                        _f.sent();
                        return [4 /*yield*/, migration_model_1.default.create({
                                migration: name_1.join(""),
                            })];
                    case 15:
                        _f.sent();
                        _f.label = 16;
                    case 16: return [3 /*break*/, 21];
                    case 17: return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../database/mysql/migrations/000000_migrations")); })];
                    case 18:
                        m1 = (_f.sent()).default;
                        return [4 /*yield*/, m1.down()];
                    case 19:
                        _f.sent();
                        return [4 /*yield*/, Migration.down()];
                    case 20:
                        _f.sent();
                        _f.label = 21;
                    case 21: return [3 /*break*/, 23];
                    case 22:
                        _e = true;
                        return [7 /*endfinally*/];
                    case 23: return [3 /*break*/, 9];
                    case 24: return [3 /*break*/, 31];
                    case 25:
                        e_1_1 = _f.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 31];
                    case 26:
                        _f.trys.push([26, , 29, 30]);
                        if (!(!_e && !_a && (_b = migrations_1.return))) return [3 /*break*/, 28];
                        return [4 /*yield*/, _b.call(migrations_1)];
                    case 27:
                        _f.sent();
                        _f.label = 28;
                    case 28: return [3 /*break*/, 30];
                    case 29:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 30: return [7 /*endfinally*/];
                    case 31:
                        console.log(chalk_1.default.green("Migrations successfully"));
                        return [2 /*return*/];
                }
            });
        });
    },
});
