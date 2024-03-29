import axios from "axios";

const ApiUrl = process.env.NEXT_PUBLIC_PORTFOLIO_API_URL;
export const getAll = () => {
  return axios.get(`${ApiUrl}/portfolios`);
};

export const getPortfolioById = (id) => {
  return axios.get(`${ApiUrl}/portfolios/${id}`);
};

export const addPortfolio = (data) => {
  console.log("on add", data);
  return axios.post(`${ApiUrl}/portfolios`, data);
};
