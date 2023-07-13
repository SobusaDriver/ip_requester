import { getIpgeo, getIpify, getIpconfig } from "./ipGetters.js";

export default async function getPublicIp(options = {}) {
  const publicIp = await Promise.any([getIpgeo(options), getIpify(options), getIpconfig(options)]);
  return publicIp;
}