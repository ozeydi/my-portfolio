import { addPortfolio } from "@/api/portfolios";

export default async function createPortfolio(req, res) {
  try {
    const data = req;
    console.log("enter here", req);
    const res = await addPortfolio(data);
    console.log("res", res);
    return res.data;
  } catch (e) {
    console.log("err", e);
    return res.status(e.status || 400).end(e.message);
  }
}
