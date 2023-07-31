import axios from "axios";

export default async (req, res) => {
  try {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = await result.data;
    res.status(200).json(posts.slice(0, 10));
  } catch (err) {
    console.error(err);
    res.status(err.status || 400).json({ message: "Api Error!" });
  }
};
