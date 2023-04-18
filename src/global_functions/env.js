"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
globalThis.env = function (con) {
    try {
        require("dotenv").config();
        var env_1 = process.env;
        return env_1[con];
    }
    catch (error) {
        return null;
    }
};
