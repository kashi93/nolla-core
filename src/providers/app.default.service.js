"use strict";
var AppDefaultService = /** @class */ (function () {
    function AppDefaultService() {
    }
    AppDefaultService.prototype.boot = function (app) {
        var cookieParser = require("cookie-parser");
        app.use(cookieParser());
    };
    return AppDefaultService;
}());
module.exports = AppDefaultService;
