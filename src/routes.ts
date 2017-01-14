import * as Router from "koa-router";
import helloWorld from "./hello";

const router = new Router();

/**
 * Index page. Currently doesn"t do anything. ¯\_(ツ)_/¯
 */
router.get("/", async(ctx, next) => {
    await next();
    ctx.body = "(This page intentionally left blank)";
    ctx.status = 200;
});

router.get("/hello-world", async(ctx, next) => {
    await next();
    ctx.body = helloWorld();
    ctx.status = 200;
});

export default router;
