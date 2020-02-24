/**
 * TODO
 *
 * build a new Kernel and declare the different services
 * export the Kernel
 */
import { kernel } from "@ilos/common";
import { Kernel as BaseKernel } from "@ilos/framework";
import { bootstrap as bsServiceA } from "@split/service_a";

@kernel({
  children: [{ ...bsServiceA.serviceProviders }]
})
export class Kernel extends BaseKernel {}
