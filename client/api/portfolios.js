import axios from "axios";

export const getAll = () => {
  return axios.get("http://localhost:3001/api/portfolios");
};

export const getPortfolio = (req, res) => {
  return axios.get(`http://localhost:3001/api/portfolios/${req.params.id}`);
};
