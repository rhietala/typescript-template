"use strict";
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const routes_1 = require("./routes");
const app = new Koa();
const port = process.env.PORT || 3000;
app.use(bodyParser())
    .use(routes_1.default.routes())
    .use(routes_1.default.allowedMethods());
app.listen(port, () => console.log(`Listening on port ${port}`));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = app;
