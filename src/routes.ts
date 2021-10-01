import { Router } from "express";
import AnnouncementController from "./app/controllers/AnnouncementController";
import AdvertiserController from "./app/controllers/AdvertiserController";

const announcementController = new AnnouncementController();
const advertiserController = new AdvertiserController();

const routes = Router();

routes.get('/ads', announcementController.get);
routes.post('/ads', announcementController.store);
routes.put('/ads/:id', announcementController.update);
routes.delete('/ads/:id', announcementController.delete);

routes.get('/advertisers', advertiserController.get);
routes.post('/advertisers', advertiserController.store);
routes.put('/advertisers/:id', advertiserController.update);
routes.delete('/advertisers/:id', advertiserController.delete);

export default routes;