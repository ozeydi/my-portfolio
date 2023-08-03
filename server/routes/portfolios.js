import express from "express";
import { getPortfolios, getPortfolioById } from "../controllers/portfolios.js";
const router = express.Router();

router.get("/api/portfolios", getPortfolios);
router.get("/api/portfolios/:id", getPortfolioById);

export { router as portfoliosRouter };
