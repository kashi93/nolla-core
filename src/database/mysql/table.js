"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetParams = exports.params = void 0;
exports.params = [];
var resetParams = function () {
    exports.params = [];
};
exports.resetParams = resetParams;
var configTranslate = function (query, config) {
    if ((config.nullable || false) === true) {
        query += " NULL";
    }
    else {
        query += " NOT NULL";
    }
    if ((config.unique || false) === true) {
        query += " UNIQUE";
    }
    if (String(config.default || "").trim().length > 0) {
        query += " DEFAULT `".concat(config.default, "`");
    }
    if (String(config.after || "").trim().length > 0) {
        query += " AFTER `".concat(config.after, "`");
    }
    if (config.alterMode != null) {
        query = "".concat(config.alterMode, " ").concat(query);
    }
    exports.params.push(query);
};
var Table = /** @class */ (function () {
    function Table() {
        this.bigIncrements = function (column, config) {
            if (config === void 0) { config = {}; }
            return configTranslate("`".concat(column, "` BIGINT UNSIGNED AUTO_INCREMENT"), config);
        };
        this.binary = function (column, config) {
            if (config === void 0) { config = {}; }
            return configTranslate("`".concat(column, "` BLOB"), config);
        };
        this.boolean = function (column, config) {
            if (config === void 0) { config = {}; }
            return configTranslate("`".concat(column, "` BOOLEAN"), config);
        };
        this.char = function (column, config) {
            if (config === void 0) { config = {}; }
            return configTranslate("`".concat(column, "` CHAR(").concat(length, ")"), config);
        };
        this.dateTime = function (column, config) {
            if (config === void 0) { config = {}; }
            return configTranslate("`".concat(column, "` DATETIME"), config);
        };
        this.date = function (column, config) {
            if (config === void 0) { config = {}; }
            return configTranslate("`".concat(column, "` DATE NOT NULL"), config);
        };
        this.decimal = function (column, config) {
            if (config === void 0) { config = {}; }
            return configTranslate("`".concat(column, "` DECIMAL(").concat(config.precision || 8, ",").concat(config.scale || 2, ")"), config);
        };
        this.enum = function (column, values, config) {
            if (config === void 0) { config = {}; }
            return configTranslate("`".concat(column, "` ENUM (").concat(values.map(function (v) { return "'".concat(v, "'"); }).join(","), ")"), config);
        };
        this.int = function (column, config) {
            if (config === void 0) { config = {}; }
            return configTranslate("`".concat(column, "` INTEGER"), config);
        };
        this.bigInt = function (column, config) {
            if (config === void 0) { config = {}; }
            return configTranslate("`".concat(column, "` BIGINT"), config);
        };
        this.unsignedBigInt = function (column, config) {
            if (config === void 0) { config = {}; }
            return configTranslate("`".concat(column, "` BIGINT UNSIGNED"), config);
        };
        this.smallInt = function (column, config) {
            if (config === void 0) { config = {}; }
            return configTranslate("`".concat(column, "` SMALLINT"), config);
        };
        this.unsignedSmallInt = function (column, config) {
            if (config === void 0) { config = {}; }
            return configTranslate("`".concat(column, "` SMALLINT UNSIGNED"), config);
        };
        this.tinyInt = function (column, config) {
            if (config === void 0) { config = {}; }
            return configTranslate("`".concat(column, "` TINYINT"), config);
        };
        this.unsignedTinyInt = function (column, config) {
            if (config === void 0) { config = {}; }
            return configTranslate("`".concat(column, "` TINYINT UNSIGNED"), config);
        };
        this.string = function (column, config) {
            if (config === void 0) { config = {}; }
            return configTranslate("`".concat(column, "` VARCHAR(").concat(config.length || 255, ")"), config);
        };
        this.longText = function (column, config) {
            if (config === void 0) { config = {}; }
            return configTranslate("`".concat(column, "` LONGTEXT"), config);
        };
        this.mediumText = function (column, config) {
            if (config === void 0) { config = {}; }
            return configTranslate("`".concat(column, "` MEDIUMTEXT"), config);
        };
        this.timestamp = function (column, config) {
            if (config === void 0) { config = {}; }
            return configTranslate("`".concat(column, "` TIMESTAMP"), config);
        };
        this.dropColumn = function (column) { return exports.params.push(" DROP COLUMN `".concat(column, "`")); };
    }
    Table.prototype.id = function (column) {
        if (column === void 0) { column = "id"; }
        exports.params.push("".concat(column, " BIGINT NOT NULL AUTO_INCREMENT"));
        exports.params.push("PRIMARY KEY (".concat(column, ")"));
    };
    Table.prototype.double = function (column, config) {
        if (config === void 0) { config = {}; }
        var query = "`".concat(column, "` DOUBLE");
        if (config.precision != null && config.scale != null) {
            query += "(".concat(config.precision, ",").concat(config.scale, ")");
        }
        configTranslate(query, config);
    };
    Table.prototype.float = function (column, config) {
        if (config === void 0) { config = {}; }
        var query = "`".concat(column, "` FLOAT");
        if (config.precision != null && config.scale != null) {
            query += "(".concat(config.precision, ",").concat(config.scale, ")");
        }
        configTranslate(query, config);
    };
    Table.prototype.timestamps = function () {
        exports.params.push("created_at TIMESTAMP NULL");
        exports.params.push("updated_at TIMESTAMP NULL");
    };
    Table.prototype.custom = function (statement) {
        exports.params.push(statement);
    };
    return Table;
}());
exports.default = new Table();
