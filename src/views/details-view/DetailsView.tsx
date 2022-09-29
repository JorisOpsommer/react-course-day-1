import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHttpRequest } from "../../api/api-client";
import { MarketData } from "../../models/market-data";

export const DetailsView = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState<MarketData>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getHttpRequest(`/markets/${id}`);
      if (!response.error) {
        const result = response.data.result;
        setCoin(result);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <h1>ID: {id}</h1>
      <h2>{coin?.last}$</h2>
    </div>
  );
};
