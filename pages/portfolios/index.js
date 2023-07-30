import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import Link from "next/link";
import axios from "axios";

const Portfolios = ({ posts }) => {
  const renderPosts = () => {
    return posts.map((elt) => (
      <li key={elt.id}>
        <Link href={"/portfolios/" + elt.id}> {elt.title}</Link>
      </li>
    ));
  };
  return (
    <>
      <BaseLayout>
        <BasePage>
          <h1>Portfolios page</h1>
          <ul>{renderPosts()}</ul>
        </BasePage>
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
