import * as Koa from "koa";
import * as bodyParser from "koa-bodyparser";
import * as winston from "winston";

import router from "./routes";

const app = new Koa();
const port = process.env.PORT || 3000;

// tslint:disable-next-line:no-expression-statement
app.use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods());

// tslint:disable-next-line:no-expression-statement
app.listen(port, () => winston.info(`Listening on port ${port}`));

export default app;
