import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";

const PortfolioDetail = () => {
  const router = useRouter();
  const { user, isLoading } = useUser();

  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/posts/" + router.query.id);
      const result = await res.json();
      if (res.status != 200) {
        setError(result);
      } else {
        setData(result);
      }
    }

    fetchData();
  }, []);

  return (
    <BaseLayout user={user} loading={isLoading}>
      <BasePage>
        {data && (
          <>
            <h1>{data.title}</h1>
            <p>BODY: {data.body}</p>
            <p>id: {data.id}</p>
          </>
        )}
        {error && <div className="alert alert-danger">{error.message}</div>}
      </BasePage>
    </BaseLayout>
  );
};

export default PortfolioDetail;
