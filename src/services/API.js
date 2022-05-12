import axios from "axios";

const requestApi = axios.create({
  baseURL: "https://clickfinder-json-server.herokuapp.com/",
});

requestApi.requestAuth = (url, token, method = "get", data = {}) => {
  const request = {
    method,
    url,
    headers: { Authorization: `Bearer ${token}` },
    data,
  };
  return requestApi(request);
};

requestApi.getAuth = (url, token) => {
  return requestApi.requestAuth(url, token);
};

requestApi.postAuth = (url, data, token) => {
  return requestApi.requestAuth(url, token, "post", data);
};

requestApi.patchAuth = (url, data, token) => {
  return requestApi.requestAuth(url, token, "patch", data);
};

export default requestApi;
