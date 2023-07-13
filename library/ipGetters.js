import { IPGEO_URL, IPIFY_URL, TIMEOUT_GOOGLE_URL } from "../constants";
import fetchWithTimeout from "./customFetch/customFetch";
export async function publicIpObtainerIpify() {
  try {
    let timeStamp = Date.now();
    const response = await fetchWithTimeout(IPIFY_URL);
    const parsedResponse = await response.text();
    let timeStampEnd = Date.now();
    return { "ip": parsedResponse, "responseTime": timeStampEnd - timeStamp };
  } catch (err) {
    return err.message;
  }

}

export async function publicIpObtainerIpGeo() {
  try {
    let timeStamp = Date.now();
    const rawIpValueipGeo = await fetchWithTimeout(IPGEO_URL)
    let timeStampEnd = Date.now();
    const ipValue = await rawIpValueipGeo.json();
    return { "ip": ipValue.ip, "responseTime": timeStampEnd - timeStamp };
  } catch (err) {
    return err.message;
  }

}

export async function getTimeOut() {
  try {
    const res = await fetch(TIMEOUT_GOOGLE_URL);
    const parsedResponse = res.json();
    return parsedResponse;
  } catch (err) {
    return err.message;
  }
}