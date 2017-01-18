"use strict";
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const logger = require("koa-logger-winston");
const winston = require("winston");
const config_1 = require("./config");
const routes_1 = require("./routes");
const app = new Koa();
const ip = config_1.default.get("ip");
const port = config_1.default.get("port");
// tslint:disable-next-line:no-expression-statement
app.use(bodyParser())
    .use(logger(winston))
    .use(routes_1.default.routes())
    .use(routes_1.default.allowedMethods());
// tslint:disable-next-line:no-expression-statement
app.listen(port, ip, () => winston.info(`Listening on ${ip}:${port}`));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = app;
