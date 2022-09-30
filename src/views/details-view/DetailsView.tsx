import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHttpRequest } from "../../api/api-client";
import { HistoricalMarketData } from "../../models/historical-market.data";
import { MarketData } from "../../models/market-data";
import { getHistoricalData } from "./details-view-functions";

export const DetailsView = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState<MarketData>();
  const [historicalData, setHistoricalData] = useState<HistoricalMarketData[]>([]);
  const [isLoadingHistoricalData, setIsLoadingHistoricalData] = useState<boolean>(true);

  console.log(historicalData);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getHttpRequest(`/markets/${id}`);
      if (!response.error) {
        const result = response.data.result;
        setCoin(result);
      }
    };

    const fetchHistoricalData = async () => {
      if (id) {
        const response = await getHistoricalData(id);
        setHistoricalData(response);
        setIsLoadingHistoricalData(false);
      }
    };

    fetchData();
    fetchHistoricalData();
  }, [id]);

  return (
    <div>
      <h1>ID: {id}</h1>
      <h2>{coin?.last}$</h2>
    </div>
  );
};
