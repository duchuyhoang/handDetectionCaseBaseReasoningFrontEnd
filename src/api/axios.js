import axios from "axios";
import { SERVER_HOST } from "../shared/constants";
const axiosApi = axios.create({
  baseURL: SERVER_HOST,
  timeout: 5000,
  // headers: {'X-Custom-Header': 'foobar'}
});

function mergeHeader(config = null) {
  const defaultHeaders = axiosApi.defaults.headers;
  let headers = {};
  console.log("defaultHeaders",defaultHeaders);
  if (config) {
    headers = { ...defaultHeaders, ...config };
  }

  return { ...defaultHeaders, headers };
}

const get = (url, { data = {}, headerOptions = {}, config = {} }) => {
  const mergedHeader = mergeHeader(headerOptions);
  return axiosApi.get(url, data, { headers: mergedHeader.headers, ...config });
};
const post = (url, { data = {}, headerOptions = {}, config = {} }) => {
  const mergedHeader = mergeHeader({
    ...headerOptions,
    // "Content-Type": "application/x-www-form-urlencoded",
  });
  return axiosApi.post(url, data, { headers: mergedHeader.headers, ...config });
};

const postMultipart = (url, { data = {}, headerOptions = {}, config = {} }) => {
  const mergedHeader = mergeHeader({
    ...headerOptions,
    "Content-Type": "application/x-www-form-urlencoded",
  });
  return axiosApi.post(url, data, { header: mergedHeader.headers, ...config });
};

export { get, post, postMultipart };
