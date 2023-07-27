import BaseLayout from "@/components/layouts/BaseLayout";
import axios from "axios";
const Portfolios = ({ posts }) => {
  const renderPosts = () => {
    return posts.map((elt) => <li key={elt.id}>{elt.title}</li>);
  };
  return (
    <>
      <BaseLayout>
        <h1>Portfolios page</h1>
        <ul>{renderPosts()}</ul>
      </BaseLayout>
    </>
  );
};

Portfolios.getInitialProps = async () => {
  let posts = [];
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    posts = res.data;
  } catch (err) {
    console.error(err);
  }

  return { posts: posts.slice(0, 10) }; // this will be passed to the page component as props
};

export default Portfolios;
