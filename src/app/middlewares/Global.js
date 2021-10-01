"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalMiddlewares = /** @class */ (function () {
    function GlobalMiddlewares() {
    }
    GlobalMiddlewares.prototype.notFound = function (req, res, next) {
        var notFoundError = new Error("Not found!");
        notFoundError.status = 404;
        next(notFoundError);
    };
    GlobalMiddlewares.prototype.catchAll = function (error, req, res, next) {
        return res.status(error.status || 500).json({ error: error.message });
    };
    return GlobalMiddlewares;
}());
exports.default = GlobalMiddlewares;
