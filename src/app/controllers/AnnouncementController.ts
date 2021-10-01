import { Request, Response, NextFunction } from "express";
import ResponseError from "../errors/ResponseError";
import Validator from "../services/Validator";
import Announcement from "../models/Announcement";
import Advertiser from "../models/Advertiser";
import { getRepository } from "typeorm";

class AnnouncementController {
    async get(req: Request, res: Response, next: NextFunction) {
        try {
            const repository = getRepository(Announcement);

            const announcements = await repository.find();

            return res.status(200).json(announcements);
        } catch (error) {
            next(error);
        }
    }

    async store(req: Request, res: Response, next: NextFunction) {
        try {
            const advertiserRepository = getRepository(Advertiser);
            const announcementRepository = getRepository(Announcement);

            const validator = new Validator(req.body, 'announcement');

            const hasNullValues = validator.checkNullValues();
            const hasAllValuesInObject = validator.checkValuesIsInObject();

            if (hasNullValues || !hasAllValuesInObject) {
                const error: ResponseError = new Error('Null values!');
                error.status = 400;
                throw error;
            }

            const hasAdvertiser = await advertiserRepository.findOne({ where: { id: req.body.id_advertiser } });

            if (!hasAdvertiser) {
                const error: ResponseError = new Error('We don\'t have advertiser with this id!');
                error.status = 400;
                throw error;
            }

            const announcement = await announcementRepository.create(req.body);

            await announcementRepository.save(announcement);

            return res.status(201).json(announcement);
        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const repository = getRepository(Announcement);

            const { id } = req.params;

            const validator = new Validator(req.body, 'announcement');

            const hasNullValues = validator.checkNullValues();
            const hasAllValuesInObject = validator.checkValuesIsInObject();

            if (hasNullValues || !hasAllValuesInObject) {
                const error: ResponseError = new Error('Null values!');
                error.status = 400;
                throw error;
            }

            const announcement = await repository.findOne({ where: { id } });

            if (!announcement) {
                const error: ResponseError = new Error('The announcement doesn\'t exist!');
                error.status = 400;
                throw error;
            }

            await repository.update(id, req.body);

            return res.status(200).json(announcement);
        } catch (error) {
            next(error);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const repository = getRepository(Announcement);

            const { id } = req.params;

            const announcement = await repository.findByIds([id]);

            if (!announcement) {
                const error: ResponseError = new Error('The announcement doesn\'t exist!');
                error.status = 400;
                throw error;
            }

            await repository.delete(id);

            return res.status(200).json(announcement);
        } catch (error) {
            next(error);
        }
    }
}

export default AnnouncementController;