"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
typeorm_1.createConnection().then(function () { return console.log("Connected with DB."); }).catch(function (err) { return console.error(err); });
