"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
globalThis.values = {};
globalThis.old = function (field) {
    return global.values[field] || "";
};
globalThis.clearFormValuesSession = function () {
    setTimeout(function () {
        global.values = {};
    }, 3000);
};
