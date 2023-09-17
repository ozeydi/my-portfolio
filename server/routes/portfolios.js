import express from "express";

import { checkJwt } from "../controllers/auth.js";
import {
  getPortfolios,
  getPortfolioById,
  addPortfolio,
} from "../controllers/portfolios.js";

const router = express.Router();

router.get("/api/portfolios", getPortfolios);
router.get("/api/portfolios/:id", getPortfolioById);
router.post("/api/portfolios", checkJwt, addPortfolio);

export { router as portfoliosRouter };
