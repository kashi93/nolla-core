"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
globalThis.view = function (path, data) {
    if (data === void 0) { data = {}; }
    return function () {
        return {
            view: path,
            data: data,
        };
    };
};
