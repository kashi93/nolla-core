"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
globalThis.public_path = function (path) {
    if (path === void 0) { path = ""; }
    return "".concat(process.cwd(), "/public/").concat(path);
};
