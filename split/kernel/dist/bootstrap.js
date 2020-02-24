"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * TODO
 *
 * import the kernel
 * import the transports
 * export a created bootstrap
 */
const framework_1 = require("@ilos/framework");
const transport_http_1 = require("@ilos/transport-http");
const Kernel_1 = require("./Kernel");
exports.bootstrap = framework_1.Bootstrap.create({
    kernel: () => Kernel_1.Kernel,
    transport: {
        http: (k) => new transport_http_1.HttpTransport(k)
    }
});
//# sourceMappingURL=bootstrap.js.map