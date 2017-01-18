/* tslint:disable:no-expression-statement */
"use strict";
const convict = require("convict");
const conf = convict({
    env: {
        doc: "The applicaton environment.",
        format: ["production", "development", "test"],
        default: "development",
        env: "NODE_ENV",
    },
    ip: {
        doc: "The IP address to bind.",
        format: "ipaddress",
        default: "127.0.0.1",
        env: "IP_ADDRESS",
    },
    port: {
        doc: "The port to bind.",
        format: "port",
        default: 3000,
        env: "PORT",
    },
});
// Load environment dependent configuration
const env = conf.get("env");
conf.loadFile("./config/" + env + ".json");
// Perform validation
conf.validate({ strict: true });
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = conf;
