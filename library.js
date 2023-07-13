import { IPGEO_URL, IPIFY_URL, TIMEOUT_CODE } from "./CONST.js";

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
    const res = await fetch("http://google.com:81/");
    const parsedResponse = res.json();
    return parsedResponse;
  } catch (err) {
    return err.message;
  }
}

async function fetchWithTimeout(resource, options = {}) {
  const { timeout = 5000 } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const response = await fetch(resource, {
    ...options,
    signal: controller.signal
  });
  clearTimeout(id);

  return response;
}

export async function getPublicIp() {
  let publicIpRequest = await publicIpObtainerIpGeo();
  // let publicIpRequest = await getTimeOut();
  if (publicIpRequest === TIMEOUT_CODE) {
    publicIpRequest = await publicIpObtainerIpify();
    if (publicIpRequest === TIMEOUT_CODE) {
      throw Error("Unable to obtain Public IP");
    }
    return publicIpRequest
  }
  return publicIpRequest;
}