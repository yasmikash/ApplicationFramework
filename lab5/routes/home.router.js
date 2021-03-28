const Router = require("@koa/router");

const router = new Router({
  prefix: "/home",
});

router.get("/", (ctx) => {
  ctx.body = "Hello World";
});
router.post("/", (ctx) => {
  console.log(ctx.request.body);
  ctx.body = "Hello World";
});

module.exports = router;
