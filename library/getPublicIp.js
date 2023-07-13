import { getIpIpGeo, getIpIpify } from "./ipGetters.js";

export default async function getPublicIp(options = {}) {
  const publicIp = await Promise.any([getIpIpGeo(options), getIpIpify(options)]);
  return publicIp;
}