/**
 * TODO
 *
 * import the kernel
 * import the transports
 * export a created bootstrap
 */
import { Bootstrap as BaseBootstrap } from "@ilos/framework";
import { TransportInterface } from "@ilos/common";
import { HttpTransport } from "@ilos/transport-http";

import { Kernel } from "./Kernel";

export const bootstrap = BaseBootstrap.create({
  kernel: (): any => Kernel,
  transport: {
    http: (k): TransportInterface => new HttpTransport(k)
  }
});
