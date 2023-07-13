import { publicIpObtainerIpGeo, publicIpObtainerIpify } from "./ipGetters.js";
import { TIMEOUT_CODE } from "../constants.js";

export default async function getPublicIp() {
  let publicIpRequest = await publicIpObtainerIpGeo();
  if (publicIpRequest === TIMEOUT_CODE) {
    publicIpRequest = await publicIpObtainerIpify();
    if (publicIpRequest === TIMEOUT_CODE) {
      throw Error("Unable to obtain Public IP");
    }
    return publicIpRequest;
  }
  return publicIpRequest;
}