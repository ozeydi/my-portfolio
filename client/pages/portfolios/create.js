import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { Row, Col } from "reactstrap";
import PortfolioForm from "@/components/PortfolioForm";
import { useRouter } from "next/router";

const Create = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();
  const isAdmin = () => {
    return (
      user &&
      user[process.env.NEXT_PUBLIC_AUTH0_NAMESPACE + "/roles"].includes("admin")
    );
  };
  console.log(
    "isAdmin",
    user &&
      user[process.env.NEXT_PUBLIC_AUTH0_NAMESPACE + "/roles"].includes("admin")
  );

  const redirectLogin = () => {
    router.push("/api/auth/login");
  };

  const RenderCreatePage = () => {
    if (isAdmin()) {
      return (
        <>
          <BaseLayout user={user} loading={isLoading}>
            <BasePage header="Create Portfolio">
              <Row>
                <Col md="8">
                  <PortfolioForm />
                </Col>
              </Row>
            </BasePage>
          </BaseLayout>
        </>
      );
    } else redirectLogin();
  };
  return RenderCreatePage();
};

export default Create;
