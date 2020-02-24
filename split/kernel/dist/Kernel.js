"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * TODO
 *
 * build a new Kernel and declare the different services
 * export the Kernel
 */
const common_1 = require("@ilos/common");
const framework_1 = require("@ilos/framework");
const service_a_1 = require("@split/service_a");
let Kernel = class Kernel extends framework_1.Kernel {
};
Kernel = __decorate([
    common_1.kernel({
        children: [Object.assign({}, service_a_1.bootstrap.serviceProviders)]
    })
], Kernel);
exports.Kernel = Kernel;
//# sourceMappingURL=Kernel.js.map