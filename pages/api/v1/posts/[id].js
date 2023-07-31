import axios from "axios";

export default async (req, res) => {
  try {
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${req.query.id}`
    );
    const post = await result.data;
    res.status(200).json(post);
  } catch (err) {
    console.error(err);
    res.status(err.status || 400).json({ message: "Api Error!" });
  }
};
