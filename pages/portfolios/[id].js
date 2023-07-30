import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import axios from "axios";
import { useRouter } from "next/router";

const PortfolioDetail = ({ portfolio }) => {
  const router = useRouter();

  return (
    <BaseLayout>
      <BasePage>
        <h1>{portfolio.title}</h1>
        <p>BODY: {portfolio.body}</p>
        <p>BODY: {portfolio.id}</p>
      </BasePage>
    </BaseLayout>
  );
};

PortfolioDetail.getInitialProps = async ({ query }) => {
  let post = {};
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${query.id}`
    );
    post = res.data;
  } catch (err) {
    console.error(err);
  }

  return { portfolio: post }; // this will be passed to the page component as props
};

export default PortfolioDetail;
