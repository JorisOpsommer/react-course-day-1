import { useEffect, useState } from "react";
import { getHttpRequest } from "../../api/api-client";
import { MarketData } from "../../models/market-data";
import ListItem from "../ListItem";
import { filterPerpContracts } from "./list-functions";

const style = {
  listStyle: "none",
  padding: 0,
};

const List = () => {
  const [marketData, setMarketData] = useState<MarketData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMarketData = async () => {
      const response = await getHttpRequest("/markets");
      if (!response.error) {
        const result = response.data.result;
        const filtered = filterPerpContracts(result);
        setMarketData(filtered);
      }
      setIsLoading(false);
    };
    fetchMarketData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <ul style={style}>
          {marketData?.map((data: any, index) => (
            <ListItem key={index} name={data.name} volume={data.volumeUsd24h} />
          ))}
        </ul>
      )}
    </>
  );
};

export default List;
