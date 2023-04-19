"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
globalThis.node_path = function (path) {
    if (path === void 0) { path = ""; }
    return "".concat(process.cwd(), "/node_modules/").concat(path);
};
