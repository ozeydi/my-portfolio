import { useEffect } from "react";

import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { Row, Col } from "reactstrap";
import PortfolioForm from "@/components/PortfolioForm";
import { useRouter } from "next/router";
import createPortfolio from "../api/portfolios";

const Create = ({ session }) => {
  const router = useRouter();

  const { user, isLoading } = useUser();

  useEffect(() => {
    if (
      user &&
      !user[process.env.NEXT_PUBLIC_AUTH0_NAMESPACE + "/roles"].includes(
        "admin"
      )
    ) {
      router.push("/api/auth/logout");
    }
  }, []);

  const onCreatePortfolio = (data) => {
    createPortfolio(data);
  };
  const RenderCreatePage = () => {
    if (
      user &&
      user[process.env.NEXT_PUBLIC_AUTH0_NAMESPACE + "/roles"].includes("admin")
    )
      return (
        <>
          <BaseLayout user={user} loading={isLoading}>
            <BasePage header="Create Portfolio">
              <Row>
                <Col md="8">
                  <PortfolioForm onSubmit={onCreatePortfolio} />
                </Col>
              </Row>
            </BasePage>
          </BaseLayout>
        </>
      );
  };
  return RenderCreatePage();
};

export default withPageAuthRequired(Create);
