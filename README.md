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
`service`       Contains the `URL` value of te service that fullfilled the request.\
>
```bash
  {
    ip: "123.456.789.1",    // a string with the ip address in the standard "0.0.0.0" format.
    responseTime: 100,      // a positive int number representing milliseconds.
    service: "SERVICE_URL"  // a string with the url of the first responder service.
  }
```

The `getPublicIp`, `getIpIpGeo` and `getIpIpify` functions accept the standard `fetch` options parameter,
adding one more called `timeout` that is used to configure the maximum wait time than the client can wait.
By default it's set at **5 seconds** (5000ms).
>
```bash
  const publicIp = await getPublicIp({timeout: 5000});
```
