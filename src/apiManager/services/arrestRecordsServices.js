import API from "../endpoints";
import { API_KEY } from "../endpoints/config";
import { httpGETRequest } from "../httpRequestHandler/index.";

export const burglaryReports = () => {
  const url = `${API.GET_ARREST_RECORDS}?from=2013&to=2023&API_KEY=${API_KEY}`;
  return httpGETRequest(url);
};
