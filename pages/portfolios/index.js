import { useEffect, useState } from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import Link from "next/link";
import useSWR from "swr";

const Portfolios = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/v1/posts");
      const result = await res.json();
      if (res.status != 200) {
        setError(result);
      } else {
        setData(result);
      }
    }

    fetchData();
  }, []);

  const renderData = () => {
    return data.map((elt) => (
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
          {data && <ul>{renderData()}</ul>}
          {error && <div className="alert alert-danger">{error.message}</div>}
        </BasePage>
      </BaseLayout>
    </>
  );
};

export default Portfolios;
