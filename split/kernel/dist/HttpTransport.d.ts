/// <reference types="node" />
import * as http from "http";
import { TransportInterface, KernelInterface } from "@ilos/common";
export declare class HttpTransport implements TransportInterface {
    private kernel;
    private server;
    constructor(kernel: KernelInterface);
    getKernel(): KernelInterface;
    getInstance(): http.Server;
    up(opts?: string[]): Promise<void>;
    down(): Promise<void>;
}
