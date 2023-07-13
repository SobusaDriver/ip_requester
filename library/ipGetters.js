import { IPCONFIG_URL, IPGEO_URL, IPIFY_URL, TIMEOUT_GOOGLE_URL } from "../constants.js";
import fetchWithTimeout from "./customFetch.js";

export async function getIpify(options = {}) {
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

export async function getIpgeo(options = {}) {
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

export async function getIpconfig(options = {}) {
  try {
    let timeStamp = Date.now();
    const rawIpValueipGeo = await fetchWithTimeout(IPCONFIG_URL, options)
    let timeStampEnd = Date.now();
    const ipValue = await rawIpValueipGeo.text();
    return { "ip": ipValue.replace("\n", ""), "responseTime": timeStampEnd - timeStamp, "service": IPCONFIG_URL };
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