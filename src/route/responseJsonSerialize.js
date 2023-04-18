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
Object.defineProperty(exports, "__esModule", { value: true });
var ResponseJsonSerialize = /** @class */ (function () {
    function ResponseJsonSerialize() {
    }
    ResponseJsonSerialize.prototype.serialize = function (data) {
        var _a, data_1, data_1_1;
        var _b, e_1, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var arr1, d, _e, _f, e_1_1, index, _g, _h;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        if (!Array.isArray(data)) return [3 /*break*/, 18];
                        arr1 = [];
                        _j.label = 1;
                    case 1:
                        _j.trys.push([1, 11, 12, 17]);
                        _a = true, data_1 = __asyncValues(data);
                        _j.label = 2;
                    case 2: return [4 /*yield*/, data_1.next()];
                    case 3:
                        if (!(data_1_1 = _j.sent(), _b = data_1_1.done, !_b)) return [3 /*break*/, 10];
                        _d = data_1_1.value;
                        _a = false;
                        _j.label = 4;
                    case 4:
                        _j.trys.push([4, , 8, 9]);
                        d = _d;
                        if (!(d.$_MySql != null)) return [3 /*break*/, 6];
                        _f = (_e = arr1).push;
                        return [4 /*yield*/, this.mysql(d)];
                    case 5:
                        _f.apply(_e, [_j.sent()]);
                        return [3 /*break*/, 7];
                    case 6:
                        arr1.push(d);
                        _j.label = 7;
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        _a = true;
                        return [7 /*endfinally*/];
                    case 9: return [3 /*break*/, 2];
                    case 10: return [3 /*break*/, 17];
                    case 11:
                        e_1_1 = _j.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 17];
                    case 12:
                        _j.trys.push([12, , 15, 16]);
                        if (!(!_a && !_b && (_c = data_1.return))) return [3 /*break*/, 14];
                        return [4 /*yield*/, _c.call(data_1)];
                    case 13:
                        _j.sent();
                        _j.label = 14;
                    case 14: return [3 /*break*/, 16];
                    case 15:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 16: return [7 /*endfinally*/];
                    case 17: return [2 /*return*/, arr1];
                    case 18:
                        if (!(data.$_MySql != null)) return [3 /*break*/, 24];
                        delete data.$_MySql;
                        if (!(data.data != null)) return [3 /*break*/, 22];
                        if (!Array.isArray(data.data)) return [3 /*break*/, 22];
                        index = 0;
                        _j.label = 19;
                    case 19:
                        if (!(index < data.data.length)) return [3 /*break*/, 22];
                        _g = data.data;
                        _h = index;
                        return [4 /*yield*/, this.mysql(data.data[index])];
                    case 20:
                        _g[_h] = _j.sent();
                        _j.label = 21;
                    case 21:
                        index++;
                        return [3 /*break*/, 19];
                    case 22:
                        if (!(data.$_attributes != null)) return [3 /*break*/, 24];
                        return [4 /*yield*/, this.mysql(data)];
                    case 23: return [2 /*return*/, _j.sent()];
                    case 24: return [2 /*return*/, data];
                }
            });
        });
    };
    ResponseJsonSerialize.prototype.mysql = function (data) {
        var _a, e_2, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var keys, _d, keys_1, keys_1_1, k, e_2_1;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        keys = Object.getOwnPropertyNames(data.$_attributes);
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 6, 7, 12]);
                        _d = true, keys_1 = __asyncValues(keys);
                        _e.label = 2;
                    case 2: return [4 /*yield*/, keys_1.next()];
                    case 3:
                        if (!(keys_1_1 = _e.sent(), _a = keys_1_1.done, !_a)) return [3 /*break*/, 5];
                        _c = keys_1_1.value;
                        _d = false;
                        try {
                            k = _c;
                            if (data.hidden.includes(k)) {
                                delete data.$_attributes[k];
                            }
                        }
                        finally {
                            _d = true;
                        }
                        _e.label = 4;
                    case 4: return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 12];
                    case 6:
                        e_2_1 = _e.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 12];
                    case 7:
                        _e.trys.push([7, , 10, 11]);
                        if (!(!_d && !_a && (_b = keys_1.return))) return [3 /*break*/, 9];
                        return [4 /*yield*/, _b.call(keys_1)];
                    case 8:
                        _e.sent();
                        _e.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        if (e_2) throw e_2.error;
                        return [7 /*endfinally*/];
                    case 11: return [7 /*endfinally*/];
                    case 12: return [2 /*return*/, data.$_attributes];
                }
            });
        });
    };
    return ResponseJsonSerialize;
}());
exports.default = new ResponseJsonSerialize();
