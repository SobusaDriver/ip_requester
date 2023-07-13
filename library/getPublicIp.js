import { getIpIpGeo, getIpIpify } from "./ipGetters.js";
import { TIMEOUT_CODE } from "../constants.js";

export default async function getPublicIp() {
  let publicIpRequest = await getIpIpGeo();
  if (publicIpRequest === TIMEOUT_CODE) {
    publicIpRequest = await getIpIpify();
    if (publicIpRequest === TIMEOUT_CODE) {
      throw Error("Unable to obtain Public IP");
    }
    return publicIpRequest;
  }
  return publicIpRequest;
}