import { Request, Response, NextFunction } from "express";
import { AppError } from "~/utils/appError";
import { logger } from "~/utils/logger";

export function errorHandler(err: unknown, req: Request, res: Response, _next: NextFunction) {
    let error = err as AppError;

    if (!(error instanceof AppError)) {
        logger.error(`[UNHANDLED ERROR] ${String(err)}`);
        error = new AppError("Terjadi kesalahan di server.", 500, false);
    }

    logger.error(`[${req.method}] ${req.originalUrl} - ${error.message}`);

    res.status(error.statusCode).json({
        success: false,
        message: error.message,
    });
}
