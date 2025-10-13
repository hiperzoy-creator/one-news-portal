import { Request, Response, NextFunction } from "express";
import { fetchAndCategorizeNews } from "~/services/news.service";
import { AppError } from "~/utils/appError";

export async function fetchNewsController(req: Request, res: Response, next: NextFunction) {
    try {
        const result = await fetchAndCategorizeNews();
        res.status(200).json({ status: "success", code: 200, message: "sukses fetch data", data: result})
    } catch (error) {
        next(new AppError("Gagal mengambil berita", 500));
    }
}
