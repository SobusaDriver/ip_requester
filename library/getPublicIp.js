import { getIpIpGeo, getIpIpify } from "./ipGetters.js";
import { TIMEOUT_CODE } from "../constants.js";

export default async function getPublicIp(options = {}) {
  let publicIpRequest = await getIpIpGeo(options);
  if (publicIpRequest === TIMEOUT_CODE) {
    publicIpRequest = await getIpIpify(options);
    if (publicIpRequest === TIMEOUT_CODE) {
      throw Error("Unable to obtain Public IP");
    }
    return publicIpRequest;
  }
  return publicIpRequest;
}