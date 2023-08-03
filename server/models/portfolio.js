import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PortfolioSchema = new Schema({
  title: { type: String, required: true, maxlength: 100 },
  company: { type: String, required: true, maxlength: 50 },
  location: { type: String, required: true },
  jobTitle: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  createdAt: { type: Date, default: Date.now },
});

const Portfolio = mongoose.model("Portfolio", PortfolioSchema);

export { Portfolio };
