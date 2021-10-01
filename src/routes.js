"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AnnouncementController_1 = __importDefault(require("./app/controllers/AnnouncementController"));
var AdvertiserController_1 = __importDefault(require("./app/controllers/AdvertiserController"));
var announcementController = new AnnouncementController_1.default();
var advertiserController = new AdvertiserController_1.default();
var routes = express_1.Router();
routes.get('/ads', announcementController.get);
routes.post('/ads', announcementController.store);
routes.put('/ads/:id', announcementController.update);
routes.delete('/ads/:id', announcementController.delete);
routes.get('/advertisers', advertiserController.get);
routes.post('/advertisers', advertiserController.store);
routes.put('/advertisers/:id', advertiserController.update);
routes.delete('/advertisers/:id', advertiserController.delete);
exports.default = routes;