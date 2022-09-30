import dayjs from "dayjs";
import { getHttpRequest } from "../../api/api-client";
import { HistoricalMarketData } from "../../models/historical-market.data";
import { colors } from "../../utils/colors";

export const getHistoricalData = async (coinName: string) => {
  const response = await getHttpRequest(
    `/markets/${coinName}/candles?resolution=86400&start_time=${dayjs().subtract(14, "d").unix()}&end_time=${dayjs().unix()}`
  );
  return response?.data?.result as HistoricalMarketData[];
};

export const mapHistoricalDataToChart = (data: HistoricalMarketData[]) => {
  const priceCloseData = data.map((d) => d.close);
  const priceCloseDataSet = {
    data: priceCloseData,
    label: "price close",
    yAxisID: "priceClose",
    order: 0,
    type: "line",
    backgroundColor: "rgb(179, 41, 130)",
    borderColor: "rgb(179, 41, 130)",
    borderWidth: 2,
  };

  const volumeData = data.map((d) => d.volume);
  const volumeDataSet = {
    data: volumeData,
    label: "volume",
    yAxisID: "volume",
    order: 1,
    type: "bar",
    backgroundColor: "rgb(25, 118, 210, 0.6)",
    borderColor: colors.blue,
    borderWidth: 1,
  };

  const labels = data.map((d) => dayjs(d.time).format("DD/MM"));

  return { labels, datasets: [priceCloseDataSet, volumeDataSet] };
};
