import * as Koa from "koa";
import * as bodyParser from "koa-bodyparser";
import * as logger from "koa-logger-winston";
import * as winston from "winston";

import conf from "./config";
import router from "./routes";

const app = new Koa();
const ip = conf.get("ip");
const port = conf.get("port");

// tslint:disable-next-line:no-expression-statement
app.use(bodyParser())
  .use(logger(winston))
  .use(router.routes())
  .use(router.allowedMethods());

// tslint:disable-next-line:no-expression-statement
app.listen(port, ip, () => winston.info(`Listening on ${ip}:${port}`));

export default app;
