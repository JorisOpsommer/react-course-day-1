import axios from "axios";
const BASEURLFTX = "https://ftx.com/api";
const BASEURL = `https://thingproxy.freeboard.io/fetch/${BASEURLFTX}`;

export const getHttpRequest = async (uri: string): Promise<any> => {
  return await axios
    .get(`${BASEURL}${uri}`)
    .then((response) => {
      return { data: response.data, error: undefined };
    })
    .catch((error) => {
      return { data: undefined, error: error?.message || "Error fetching data" };
    });
};
