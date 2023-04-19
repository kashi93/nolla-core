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
                switch (_f.label) {
                    case 0:
                        path = require("path");
                        return [4 /*yield*/, config("database.default")];
                    case 1:
                        if (!((_f.sent()) == "mysql")) return [3 /*break*/, 5];
                        return [4 /*yield*/, (0, checkMysqlTableExist_1.checkMysqlTableExist)("migrations")];
                    case 2:
                        if (!!(_f.sent())) return [3 /*break*/, 5];
                        Migration = require("../database/mysql/migrations/000000_migrations").default;
                        return [4 /*yield*/, Migration.up()];
                    case 3:
                        _f.sent();
                        return [4 /*yield*/, migration_model_1.default.create({
                                migration: "000000_migrations",
                            })];
                    case 4:
                        _f.sent();
                        _f.label = 5;
                    case 5:
                        p = "".concat(path.dirname((_d = require.main) === null || _d === void 0 ? void 0 : _d.filename), "/migrations/");
                        return [4 /*yield*/, fs_1.default.promises.readdir(p)];
                    case 6:
                        migrations = _f.sent();
                        _f.label = 7;
                    case 7:
                        _f.trys.push([7, 22, 23, 28]);
                        _e = true, migrations_1 = __asyncValues(migrations);
                        _f.label = 8;
                    case 8: return [4 /*yield*/, migrations_1.next()];
                    case 9:
                        if (!(migrations_1_1 = _f.sent(), _a = migrations_1_1.done, !_a)) return [3 /*break*/, 21];
                        _c = migrations_1_1.value;
                        _e = false;
                        _f.label = 10;
                    case 10:
                        _f.trys.push([10, , 19, 20]);
                        migrate = _c;
                        Migration = require("".concat(p, "/").concat(migrate)).default;
                        name_1 = migrate.split(".");
                        name_1.pop();
                        if (!!argv.rollback) return [3 /*break*/, 15];
                        return [4 /*yield*/, migration_model_1.default
                                .where("migration", "=", name_1.join(""))
                                .first()];
                    case 11:
                        if (!((_f.sent()) == null)) return [3 /*break*/, 14];
                        return [4 /*yield*/, Migration.up()];
                    case 12:
                        _f.sent();
                        return [4 /*yield*/, migration_model_1.default.create({
                                migration: name_1.join(""),
                            })];
                    case 13:
                        _f.sent();
                        _f.label = 14;
                    case 14: return [3 /*break*/, 18];
                    case 15:
                        m1 = require("../database/mysql/migrations/000000_migrations").default;
                        return [4 /*yield*/, m1.down()];
                    case 16:
                        _f.sent();
                        return [4 /*yield*/, Migration.down()];
                    case 17:
                        _f.sent();
                        _f.label = 18;
                    case 18: return [3 /*break*/, 20];
                    case 19:
                        _e = true;
                        return [7 /*endfinally*/];
                    case 20: return [3 /*break*/, 8];
                    case 21: return [3 /*break*/, 28];
                    case 22:
                        e_1_1 = _f.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 28];
                    case 23:
                        _f.trys.push([23, , 26, 27]);
                        if (!(!_e && !_a && (_b = migrations_1.return))) return [3 /*break*/, 25];
                        return [4 /*yield*/, _b.call(migrations_1)];
                    case 24:
                        _f.sent();
                        _f.label = 25;
                    case 25: return [3 /*break*/, 27];
                    case 26:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 27: return [7 /*endfinally*/];
                    case 28:
                        console.log(chalk_1.default.green("Migrations successfully"));
                        return [2 /*return*/];
                }
            });
        });
    },
});
