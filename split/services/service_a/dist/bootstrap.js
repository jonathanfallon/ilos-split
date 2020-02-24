"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const framework_1 = require("@ilos/framework");
const ServiceProvider_1 = require("./ServiceProvider");
exports.bootstrap = framework_1.Bootstrap.create({
    serviceProviders: [ServiceProvider_1.ServiceProvider]
});
//# sourceMappingURL=bootstrap.js.map