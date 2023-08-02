import express from "express";
import { getPortfolios } from "../controllers/portfolios.js";
const router = express.Router();

router.get("/api/portfolios", getPortfolios);

export { router as portfoliosRouter };
