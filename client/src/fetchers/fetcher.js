import axios from "axios";

const BASE_URI = "http://api.worldbank.org/v2/";

const fetcher = async (input) => {
  const startYear = input.startDate.getFullYear();
  const endYear = input.endDate.getFullYear();
  const reqURI =
    BASE_URI +
    "country/" +
    input.country +
    "/indicator/" +
    input.indicator +
    "?date=" +
    `${startYear}:${endYear}` +
    "&format=json";
  console.log(reqURI);
  const res = await axios.get(reqURI);
  return res.data;
};

export default fetcher;
