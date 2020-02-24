/**
 * TODO
 *
 * create a new ServiceProvider
 * declare the extensions
 * declare the handlers
 */
import { serviceProvider } from "@ilos/common";
import { ServiceProvider as AbstractServiceProvider } from "@ilos/core";

import { HandlerA1 } from "./handlers/HandlerA1";

@serviceProvider({
  handlers: [HandlerA1]
})
export class ServiceProvider extends AbstractServiceProvider {}
