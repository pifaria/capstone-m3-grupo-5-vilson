import axios from "axios";

const LOCAL_TOKEN = "";

export const requestApi = axios.create({
  baseURL: "https://clickfinder-json-server.herokuapp.com/",
});

export const requestAuth = (url, token, method = "get", data = {}) => {
  requestApi({
    method,
    url,
    headers: { Authorization: `Bearer ${token}` },
    data,
  });
};
