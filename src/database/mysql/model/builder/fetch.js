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
var dbCollection_1 = __importDefault(require("./dbCollection"));
var delete_1 = __importDefault(require("./delete"));
var execute_1 = require("./execute");
var update_1 = __importDefault(require("./update"));
var Fetch = /** @class */ (function () {
    function Fetch() {
    }
    Fetch.prototype.where = function (column, operator, value) {
        var self = this;
        if (self.params != null) {
            if (value == null || value == undefined) {
                self.params += " AND ".concat(column, " ").concat(operator, " NULL");
            }
            else {
                self.params += " AND ".concat(column, " ").concat(operator, " '").concat(value, "'");
            }
        }
        else {
            if (value == null || value == undefined) {
                self.params = " WHERE ".concat(column, " ").concat(operator, " NULL");
            }
            else {
                self.params = " WHERE ".concat(column, " ").concat(operator, " '").concat(value, "'");
            }
        }
        return this;
    };
    Fetch.prototype.orWhere = function (column, operator, value) {
        var self = this;
        if (value == null || value == undefined) {
            self.params += " OR ".concat(column, " ").concat(operator, " NULL");
        }
        else {
            self.params += " OR ".concat(column, " ").concat(operator, " '").concat(value, "'");
        }
        return this;
    };
    Fetch.prototype.first = function () {
        return __awaiter(this, void 0, void 0, function () {
            var self, query, d1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        query = "SELECT * FROM ".concat(this.table, " ").concat(self.params, " LIMIT 1");
                        return [4 /*yield*/, (0, execute_1.execute)(query)];
                    case 1:
                        d1 = _a.sent();
                        delete self.params;
                        if (d1.length < 1) {
                            return [2 /*return*/, null];
                        }
                        return [4 /*yield*/, dbCollection_1.default.make(this, d1[0])];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Fetch.prototype.get = function () {
        var _a, e_1, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var data, self, query, d1, _d, d1_1, d1_1_1, d, _e, _f, e_1_1;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        data = [];
                        self = this;
                        query = "SELECT * FROM ".concat(this.table, " ").concat(self.params);
                        return [4 /*yield*/, (0, execute_1.execute)(query)];
                    case 1:
                        d1 = _g.sent();
                        _g.label = 2;
                    case 2:
                        _g.trys.push([2, 10, 11, 16]);
                        _d = true, d1_1 = __asyncValues(d1);
                        _g.label = 3;
                    case 3: return [4 /*yield*/, d1_1.next()];
                    case 4:
                        if (!(d1_1_1 = _g.sent(), _a = d1_1_1.done, !_a)) return [3 /*break*/, 9];
                        _c = d1_1_1.value;
                        _d = false;
                        _g.label = 5;
                    case 5:
                        _g.trys.push([5, , 7, 8]);
                        d = _c;
                        _f = (_e = data).push;
                        return [4 /*yield*/, dbCollection_1.default.make(this, d)];
                    case 6:
                        _f.apply(_e, [_g.sent()]);
                        return [3 /*break*/, 8];
                    case 7:
                        _d = true;
                        return [7 /*endfinally*/];
                    case 8: return [3 /*break*/, 3];
                    case 9: return [3 /*break*/, 16];
                    case 10:
                        e_1_1 = _g.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 16];
                    case 11:
                        _g.trys.push([11, , 14, 15]);
                        if (!(!_d && !_a && (_b = d1_1.return))) return [3 /*break*/, 13];
                        return [4 /*yield*/, _b.call(d1_1)];
                    case 12:
                        _g.sent();
                        _g.label = 13;
                    case 13: return [3 /*break*/, 15];
                    case 14:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 15: return [7 /*endfinally*/];
                    case 16:
                        delete self.params;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Fetch.prototype.paginate = function (perPage, columns, pageName, page) {
        if (perPage === void 0) { perPage = null; }
        if (columns === void 0) { columns = ["*"]; }
        if (pageName === void 0) { pageName = "page"; }
        if (page === void 0) { page = null; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var self = _this;
                        perPage = perPage || 10;
                        if (request.input("page") != null) {
                            page = request.input("page");
                        }
                        var numRows;
                        var queryPagination;
                        var numPages;
                        var skip = page * perPage;
                        var limit = skip + "," + perPage;
                        (0, execute_1.execute)("SELECT count(*) as numRows FROM ".concat(_this.table))
                            .then(function (results) {
                            numRows = results[0].numRows;
                            numPages = Math.ceil(numRows / perPage);
                        })
                            .then(function () {
                            return (0, execute_1.execute)("SELECT ".concat(columns.join(","), " FROM ").concat(_this.table, " ").concat(self.params, " LIMIT ").concat(limit));
                        })
                            .then(function (query) { var _a, query_1, query_1_1; return __awaiter(_this, void 0, void 0, function () {
                            var data, q, _b, _c, e_2_1;
                            var _d, e_2, _e, _f;
                            return __generator(this, function (_g) {
                                switch (_g.label) {
                                    case 0:
                                        data = [];
                                        _g.label = 1;
                                    case 1:
                                        _g.trys.push([1, 9, 10, 15]);
                                        _a = true, query_1 = __asyncValues(query);
                                        _g.label = 2;
                                    case 2: return [4 /*yield*/, query_1.next()];
                                    case 3:
                                        if (!(query_1_1 = _g.sent(), _d = query_1_1.done, !_d)) return [3 /*break*/, 8];
                                        _f = query_1_1.value;
                                        _a = false;
                                        _g.label = 4;
                                    case 4:
                                        _g.trys.push([4, , 6, 7]);
                                        q = _f;
                                        _c = (_b = data).push;
                                        return [4 /*yield*/, dbCollection_1.default.make(this, q)];
                                    case 5:
                                        _c.apply(_b, [_g.sent()]);
                                        return [3 /*break*/, 7];
                                    case 6:
                                        _a = true;
                                        return [7 /*endfinally*/];
                                    case 7: return [3 /*break*/, 2];
                                    case 8: return [3 /*break*/, 15];
                                    case 9:
                                        e_2_1 = _g.sent();
                                        e_2 = { error: e_2_1 };
                                        return [3 /*break*/, 15];
                                    case 10:
                                        _g.trys.push([10, , 13, 14]);
                                        if (!(!_a && !_d && (_e = query_1.return))) return [3 /*break*/, 12];
                                        return [4 /*yield*/, _e.call(query_1)];
                                    case 11:
                                        _g.sent();
                                        _g.label = 12;
                                    case 12: return [3 /*break*/, 14];
                                    case 13:
                                        if (e_2) throw e_2.error;
                                        return [7 /*endfinally*/];
                                    case 14: return [7 /*endfinally*/];
                                    case 15:
                                        resolve({
                                            $_MySql: true,
                                            total: numRows,
                                            last_page: numPages,
                                            data: data,
                                            per_page: perPage,
                                            current_page: page,
                                        });
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                    })];
            });
        });
    };
    Fetch.prototype.all = function () {
        var _a, e_3, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var data, self, query, d1, _d, d1_2, d1_2_1, d, _e, _f, e_3_1;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        data = [];
                        self = this;
                        query = "SELECT * FROM ".concat(this.table);
                        return [4 /*yield*/, (0, execute_1.execute)(query)];
                    case 1:
                        d1 = _g.sent();
                        _g.label = 2;
                    case 2:
                        _g.trys.push([2, 10, 11, 16]);
                        _d = true, d1_2 = __asyncValues(d1);
                        _g.label = 3;
                    case 3: return [4 /*yield*/, d1_2.next()];
                    case 4:
                        if (!(d1_2_1 = _g.sent(), _a = d1_2_1.done, !_a)) return [3 /*break*/, 9];
                        _c = d1_2_1.value;
                        _d = false;
                        _g.label = 5;
                    case 5:
                        _g.trys.push([5, , 7, 8]);
                        d = _c;
                        _f = (_e = data).push;
                        return [4 /*yield*/, dbCollection_1.default.make(this, d)];
                    case 6:
                        _f.apply(_e, [_g.sent()]);
                        return [3 /*break*/, 8];
                    case 7:
                        _d = true;
                        return [7 /*endfinally*/];
                    case 8: return [3 /*break*/, 3];
                    case 9: return [3 /*break*/, 16];
                    case 10:
                        e_3_1 = _g.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 16];
                    case 11:
                        _g.trys.push([11, , 14, 15]);
                        if (!(!_d && !_a && (_b = d1_2.return))) return [3 /*break*/, 13];
                        return [4 /*yield*/, _b.call(d1_2)];
                    case 12:
                        _g.sent();
                        _g.label = 13;
                    case 13: return [3 /*break*/, 15];
                    case 14:
                        if (e_3) throw e_3.error;
                        return [7 /*endfinally*/];
                    case 15: return [7 /*endfinally*/];
                    case 16:
                        delete self.params;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Fetch.prototype.toSql = function () {
        var self = this;
        return "SELECT * FROM ".concat(this.table, " ").concat(self.params);
    };
    return Fetch;
}());
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            if (name !== "constructor") {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
        });
    });
}
applyMixins(Fetch, [update_1.default, delete_1.default]);
exports.default = Fetch;
