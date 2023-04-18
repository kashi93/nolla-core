"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
globalThis.sleep = function (ms) {
    return new Promise(function (res, rej) {
        setTimeout(function () {
            res(true);
        }, ms);
    });
};
