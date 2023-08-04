import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardTitle,
} from "reactstrap";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import Link from "next/link";
import { getAll } from "@/api/portfolios";
import PortfolioCard from "@/components/PortfolioCard";

const Portfolios = ({ portfolios }) => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  return (
    <>
      <BaseLayout user={user} loading={isLoading}>
        <BasePage header="Portfolios" className="portfolio-page">
          <Row>
            {portfolios.map((elt) => {
              return (
                <Col
                  key={elt._id}
                  onClick={() =>
                    router.push("/portfolios/[id]", `/portfolios/${elt._id}`)
                  }
                  md="4"
                >
                  <PortfolioCard portfolio={elt} />
                </Col>
              );
            })}
          </Row>
        </BasePage>
      </BaseLayout>
    </>
  );
};

export async function getStaticProps() {
  const json = await getAll();
  const portfolios = json.data;
  return {
    props: { portfolios },
  };
}

export default Portfolios;
