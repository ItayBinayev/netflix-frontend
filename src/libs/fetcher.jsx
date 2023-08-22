import axios from "axios";

const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const headers = userInfo && { headers: { authorization: userInfo.token } };

const fetcher = (url) =>
  headers
    ? axios.get(url, headers).then((res) => res.data)
    : axios.get(url).then((res) => res.data);

export default fetcher;