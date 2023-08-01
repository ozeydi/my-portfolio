import { useEffect, useState } from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useRouter } from "next/router";

const PortfolioDetail = () => {
  const router = useRouter();
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
    <BaseLayout>
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
