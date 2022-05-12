import axios from "axios";

export const requestApi = axios.create({
  baseURL: "https://clickfinder-json-server.herokuapp.com/",
});

export const requestAuth = (url, token, method = "get", data = {}) => {
  const request = {
    method,
    url,
    headers: { Authorization: `Bearer ${token}` },
    data,
  };
  return requestApi(request);
};
