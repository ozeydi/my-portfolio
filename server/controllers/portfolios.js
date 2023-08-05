import mongoose from "mongoose";
import { Portfolio } from "../models/portfolio.js";

export const getPortfolios = async (req, res) => {
  const portfolio = await Portfolio.find({});
  res.status(201).send(portfolio);
};

export const getPortfolioById = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    res.status(201).send(portfolio);
  } catch (error) {
    return res.status(422).send(error.message);
  }
};

export const addPortfolio = async (req, res) => {
  const portfolioData = req.body;
  // Todo: Exctract from req!
  const userId = "google-oauth2|106322693209926200762";
  const portfolio = new Portfolio(portfolioData);
  portfolio.userId = userId;

  try {
    const newPortfolio = await portfolio.save();
    return res.json(newPortfolio);
  } catch (error) {
    return res.status(422).send(error.message);
  }
};
