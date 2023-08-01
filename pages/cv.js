import { useUser } from "@auth0/nextjs-auth0/client";

import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";

const Cv = () => {
  const { user, isLoading } = useUser();

  return (
    <BaseLayout user={user} loading={isLoading}>
      <BasePage>
        <h1>Cv page</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default Cv;
