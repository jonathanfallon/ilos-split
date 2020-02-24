"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("http"));
class HttpTransport {
    constructor(kernel) {
        this.kernel = kernel;
    }
    getKernel() {
        return this.kernel;
    }
    getInstance() {
        return this.server;
    }
    up(opts) {
        return __awaiter(this, void 0, void 0, function* () {
            this.server = http
                .createServer((req, res) => {
                // const result = this.kernel.call(req.body.method///)
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.write("Hello World!");
                res.end();
            })
                .listen(process.env.PORT || 8080);
        });
    }
    down() {
        return __awaiter(this, void 0, void 0, function* () {
            this.server.close();
        });
    }
}
exports.HttpTransport = HttpTransport;
//# sourceMappingURL=HttpTransport.js.map