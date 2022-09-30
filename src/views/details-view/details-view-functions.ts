import dayjs from "dayjs";
import { getHttpRequest } from "../../api/api-client";
import { HistoricalMarketData } from "../../models/historical-market.data";

export const getHistoricalData = async (coinName: string) => {
  const response = await getHttpRequest(
    `/markets/${coinName}/candles?resolution=86400&start_time=${dayjs().subtract(14, "d").unix()}&end_time=${dayjs().unix()}`
  );
  return response?.data?.result as HistoricalMarketData[];
};
