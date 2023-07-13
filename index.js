import { getPublicIp, getTimeOut, publicIpObtainerIpGeo, publicIpObtainerIpify } from "./library.js";

const response = await getPublicIp();
console.log(response);