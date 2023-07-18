# IP Requester

It is a simple and minimalistic service that responds your current public IP address based only on external APIs, with no need for external dependencies or libraries, extremely lightweight and customizable.

## How To Use

### First, Install
>
```bash
  yarn add ip_requester
```

### After that, import
>
```bash
  import { getPublicIp } from "ip_requester";

  const publicIp = await getPublicIp();
```

It will answer a JSON object containing the following keys:\
`ip`            Contains de IP response resolve.\
`responseTime`  Contains the response time of the server that resolved the request.\
`service`       Contains the `url` value of te service that fullfilled the request.
>
```bash
  {
    ip: "123.456.789.1",    // a string with the ip address in IPv4 format.
    responseTime: 100,      // a positive int number representing milliseconds.
    service: "SERVICE_URL"  // a string with the url of the first responder service.
  }
```

The `getPublicIp`, `getIpgeo`, `getIpify` and `getIpconfig` functions accept the standard fetch `options` parameter,
adding one more called `timeout` that is used to configure the maximum amount of time in milliseconds the client will wait.
By default it's set at **1 seconds** (1000ms).
>
```bash
  const publicIp = await getPublicIp({timeout: 1000});    // 1 second timeout.
```

You can also use individual services by importing them separately and passing options as needed for each one.
>
```bash
  import { getIpgeo, getIpify, getIpConfig} from "ip_requester";

  cont ipgeoIp = await getIpgeo({timeout: 500});        // 500 miliseconds timeout.
  const ipifyIp = await getIpify({timeout: 1000});      // 1000 miliseconds timeout.
  const ipconfigIp = await getIpconfig({timeout: 200}); // 200 miliseconds timeout.
```
