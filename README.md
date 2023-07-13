# IP Requester

## How To Use

### First, Install
>
```bash
  yarn add ip_requester
```

### After that, import
>
```bash
  import { getPublicIp, getIpIpGeo, getIpIpify } from "ip_requester";

  const publicIp = await getPublicIp();
```

It will answer a Json object containing the keys `ip` that contains de IP response resolve,
and `responseTime` that contains the response time of the server that resolved the request.

The `getPublicIp`, `getIpIpGeo` and `getIpIpify` functions accept the standard `fetch` options parameter,
adding one more called `timeout` that is used to configure the maximum wait time than the client can wait.
