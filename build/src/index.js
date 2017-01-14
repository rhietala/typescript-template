"use strict";
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const winston = require("winston");
const routes_1 = require("./routes");
const app = new Koa();
const port = process.env.PORT || 3000;
// tslint:disable-next-line:no-expression-statement
app.use(bodyParser())
    .use(routes_1.default.routes())
    .use(routes_1.default.allowedMethods());
// tslint:disable-next-line:no-expression-statement
app.listen(port, () => winston.info(`Listening on port ${port}`));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = app;
