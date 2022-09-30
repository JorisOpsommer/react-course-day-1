import { MarketData } from "../../models/market-data";

export const filterPerpContracts = (data: MarketData[]) => {
  const filtered = data.filter((x) => x.name?.toLowerCase().includes("perp"));
  return filtered;
};
