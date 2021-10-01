import { Request, Response, NextFunction } from "express";
import ResponseError from "../errors/ResponseError";

class GlobalMiddlewares {
    notFound(req: Request, res: Response, next: NextFunction) {
        const notFoundError: ResponseError = new Error("Not found!");
        notFoundError.status = 404;
        next(notFoundError);
    }

    catchAll(error: ResponseError, req: Request, res: Response, next: NextFunction) {
        return res.status(error.status || 500).json({ error: error.message });
    }
}

export default GlobalMiddlewares;