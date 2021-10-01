import { Request, Response, NextFunction } from "express";
import ResponseError from "../errors/ResponseError";
import Validator from "../services/Validator";
import Advertiser from "../models/Advertiser";
import { getRepository } from "typeorm";

class AnnouncementController {
    async get(req: Request, res: Response, next: NextFunction) {
        try {
            const repository = getRepository(Advertiser);

            const advertisers = await repository.find();

            return res.status(200).json(advertisers);
        } catch (error) {
            next(error);
        }
    }

    async store(req: Request, res: Response, next: NextFunction) {
        try {
            const repository = getRepository(Advertiser);

            const validator = new Validator(req.body, 'advertiser');

            const hasNullValues = validator.checkNullValues();
            const hasAllValuesInObject = validator.checkValuesIsInObject();

            if (hasNullValues || !hasAllValuesInObject) {
                const error: ResponseError = new Error('Null values!');
                error.status = 400;
                throw error;
            }

            const advertiser = await repository.create(req.body);

            await repository.save(advertiser);

            return res.status(201).json(advertiser);
        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const repository = getRepository(Advertiser);

            const { id } = req.params;

            const validator = new Validator(req.body, 'advertiser');

            const hasNullValues = validator.checkNullValues();
            const hasAllValuesInObject = validator.checkValuesIsInObject();

            if (hasNullValues || !hasAllValuesInObject) {
                const error: ResponseError = new Error('Null values!');
                error.status = 400;
                throw error;
            }

            const advertiser = await repository.findOne({ where: { id } });

            if (!advertiser) {
                const error: ResponseError = new Error('The advertiser doesn\'t exist!');
                error.status = 400;
                throw error;
            }

            await repository.update(id, req.body);

            return res.status(200).json(advertiser);
        } catch (error) {
            next(error);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const repository = getRepository(Advertiser);

            const { id } = req.params;

            const advertiser = await repository.findByIds([id]);

            if (!advertiser) {
                const error: ResponseError = new Error('The advertiser doesn\'t exist!');
                error.status = 400;
                throw error;
            }

            await repository.delete(id);

            return res.status(200).json(advertiser);
        } catch (error) {
            next(error);
        }
    }
}

export default AnnouncementController;