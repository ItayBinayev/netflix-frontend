import axios from "axios";

const getHeaders = () =>{
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  const headers = userInfo && { headers: { authorization: userInfo.token } };
  return headers;
}

const fetcher = async (url) =>{
  const headers = getHeaders();
  return headers
    ? (await axios.get(url, headers)).data
    : (await axios.get(url)).data

}

export default fetcher; 