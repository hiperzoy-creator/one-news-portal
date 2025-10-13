import { Router } from "express";
import { fetchNewsController } from "~/controllers/news.controller";

const router = Router();

router.get("/news-cron", fetchNewsController);

export default router;
