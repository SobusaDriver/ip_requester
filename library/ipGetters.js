import { IPGEO_URL, IPIFY_URL, TIMEOUT_GOOGLE_URL } from "../constants.js";
import fetchWithTimeout from "./customFetch.js";
export async function getIpIpify(options = {}) {
  try {
    let timeStamp = Date.now();
    const response = await fetchWithTimeout(IPIFY_URL, options);
    const parsedResponse = await response.text();
    let timeStampEnd = Date.now();
    return { "ip": parsedResponse, "responseTime": timeStampEnd - timeStamp, "service": IPIFY_URL };
  } catch (err) {
    return err.message;
  }

}

export async function getIpIpGeo(options = {}) {
  try {
    let timeStamp = Date.now();
    const rawIpValueipGeo = await fetchWithTimeout(IPGEO_URL, options)
    let timeStampEnd = Date.now();
    const ipValue = await rawIpValueipGeo.json();
    return { "ip": ipValue.ip, "responseTime": timeStampEnd - timeStamp, "service": IPGEO_URL };
  } catch (err) {
    return err.message;
  }

}

export async function getTimeOut(options = {}) {
  try {
    const res = await fetchWithTimeout(TIMEOUT_GOOGLE_URL, options);
    const parsedResponse = res.json();
    return parsedResponse;
  } catch (err) {
    return err.message;
  }
}