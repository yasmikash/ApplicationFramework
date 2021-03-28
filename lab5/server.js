const Koa = require("koa");
const bodyParser = require("koa-bodyparser");

const HomeRoutes = require("./routes/home.router");
const PostsRoutes = require("./routes/posts.router");

const app = new Koa();

const PORT = 3000;

// app.use((ctx) => {
//   ctx.body = "Hello World";
// });

app.use(bodyParser());
app.use(HomeRoutes.routes()).use(HomeRoutes.allowedMethods());
app.use(PostsRoutes.routes()).use(PostsRoutes.allowedMethods());

app.listen(3000, () => console.log(`Application is running on port ${PORT}`));
