"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
require("./database/connect");
var routes_1 = __importDefault(require("./routes"));
var Global_1 = __importDefault(require("./app/middlewares/Global"));
var globalMiddlewares = new Global_1.default();
var app = express_1.default();
app.use(express_1.default.json());
app.use(routes_1.default);
app.use(globalMiddlewares.notFound);
app.use(globalMiddlewares.catchAll);
var port = 3000 || Number(process.env.PORT);
app.listen(port, function () { return console.log("Server is running at port " + port); });
