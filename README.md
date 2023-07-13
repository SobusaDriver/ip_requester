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

It will answer a JSON object containing the following keys:
`ip` that contains de IP response resolve,
`responseTime` that contains the response time of the server that resolved the request,
`service` that contains the `URL` value of te service that fullfilled the request.
>
```bash
  {
    ip: "123.456.789.1",    // the ip address in the standard "0.0.0.0" format
    responseTime: 100,      // a positive int number representing milliseconds
    service: "SERVICE_URL"  // the url of the first responder service
  }
```

The `getPublicIp`, `getIpIpGeo` and `getIpIpify` functions accept the standard `fetch` options parameter,
adding one more called `timeout` that is used to configure the maximum wait time than the client can wait.
By default it's set at **5 seconds**.
>
```bash
  const publicIp = await getPublicIp({timeout: 500});
```
