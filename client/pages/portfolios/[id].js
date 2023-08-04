import { useUser } from "@auth0/nextjs-auth0/client";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { getPortfolioById } from "@/api/portfolios";

const PortfolioDetail = ({ portfolio }) => {
  const { user, isLoading } = useUser();

  return (
    <BaseLayout user={user} loading={isLoading}>
      <BasePage header="Portfolio Detail">{JSON.stringify(portfolio)}</BasePage>
    </BaseLayout>
  );
};

export async function getServerSideProps({ query }) {
  const json = await getPortfolioById(query.id);
  const portfolio = json.data;

  return { props: { portfolio } };
}

export default PortfolioDetail;
