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
var reactUiCommand_1 = __importDefault(require("../../template/ui/react/command/reactUiCommand"));
var vueUiRollbackCommand_1 = __importDefault(require("../../template/ui/vue/command/vueUiRollbackCommand"));
var reactUiRollbackCommand_1 = __importDefault(require("../../template/ui/react/command/reactUiRollbackCommand"));
var vueUiCommand_1 = __importDefault(require("../../template/ui/vue/command/vueUiCommand"));
var prompts = require('prompts');
var generateUi = /** @class */ (function () {
    function generateUi() {
    }
    generateUi.prototype.handler = function () {
        return __awaiter(this, void 0, void 0, function () {
            var type, rollback;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.chooseType()];
                    case 1:
                        type = _a.sent();
                        if (type == null)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.rollback()];
                    case 2:
                        rollback = _a.sent();
                        if (rollback == null)
                            return [2 /*return*/];
                        this.finally({ type: type, rollback: rollback });
                        return [2 /*return*/];
                }
            });
        });
    };
    generateUi.prototype.chooseType = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prompts({
                            type: 'select',
                            name: 'type',
                            message: 'Please choose framework',
                            choices: [
                                { title: 'React', value: "react" },
                                { title: 'Vue', value: "vue" },
                                { title: 'Bootstrap', value: "bootstrap", disabled: true },
                            ],
                            initial: 1
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.type];
                }
            });
        });
    };
    generateUi.prototype.rollback = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prompts({
                            type: 'toggle',
                            name: 'rollback',
                            message: 'Do you want to rollback?',
                            initial: false,
                            active: 'Yes',
                            inactive: 'No'
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.rollback];
                }
            });
        });
    };
    generateUi.prototype.finally = function (argv) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = argv.type;
                        switch (_a) {
                            case "react": return [3 /*break*/, 1];
                            case "vue": return [3 /*break*/, 7];
                        }
                        return [3 /*break*/, 13];
                    case 1:
                        if (!!argv.rollback) return [3 /*break*/, 4];
                        return [4 /*yield*/, vueUiRollbackCommand_1.default.handle()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, reactUiCommand_1.default.handle()];
                    case 3:
                        _b.sent();
                        console.log(chalk_1.default.green("React scaffolding installed successfully."));
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, reactUiRollbackCommand_1.default.handle()];
                    case 5:
                        _b.sent();
                        // await bootstrapUiCommand.handle();
                        console.log(chalk_1.default.green("React scaffolding rollback successfully."));
                        _b.label = 6;
                    case 6: 
                    // try {
                    //     execSync("npm install", { stdio: "inherit" });
                    // } catch (error) {
                    //     console.log(error);
                    //     process.exit(1);
                    // }
                    // try {
                    //     execSync("npm run prod", { stdio: "inherit" });
                    // } catch (error) {
                    //     console.log(error);
                    //     process.exit(1);
                    // }
                    return [3 /*break*/, 14];
                    case 7:
                        if (!!argv.rollback) return [3 /*break*/, 10];
                        return [4 /*yield*/, reactUiRollbackCommand_1.default.handle()];
                    case 8:
                        _b.sent();
                        return [4 /*yield*/, vueUiCommand_1.default.handle()];
                    case 9:
                        _b.sent();
                        console.log(chalk_1.default.green("Vue scaffolding installed successfully."));
                        return [3 /*break*/, 12];
                    case 10: return [4 /*yield*/, vueUiRollbackCommand_1.default.handle()];
                    case 11:
                        _b.sent();
                        // await bootstrapUiCommand.handle();
                        console.log(chalk_1.default.green("Vue scaffolding rollback successfully."));
                        _b.label = 12;
                    case 12: 
                    // try {
                    //     execSync("npm install", { stdio: "inherit" });
                    // } catch (error) {
                    //     console.log(error);
                    //     process.exit(1);
                    // }
                    // try {
                    //     execSync("npm run prod", { stdio: "inherit" });
                    // } catch (error) {
                    //     console.log(error);
                    //     process.exit(1);
                    // }
                    return [3 /*break*/, 14];
                    case 13:
                        console.log(chalk_1.default.red("scaffold not found!"));
                        return [3 /*break*/, 14];
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
    return generateUi;
}());
exports.default = generateUi;
