import express from "express";
import newsRoutes from "~/routes/news.route";
import { errorHandler } from "~/middlewares/errorHandler";
import "~/worker/news.worker"

const app = express();
const port = 4000;

app.use(express.json());
app.use("/", newsRoutes);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
