const Router = require("@koa/router");

const Post = require("../api/posts.api");

const router = new Router({
  prefix: "/posts",
});

router.get("/", (ctx) => {
  ctx.body = Post.getPosts();
});

router.post("/", (ctx) => {
  const post = ctx.request.body;
  Post.createPost(post);
  ctx.response.status = 201;
  ctx.body = post;
});

router.post("/:id", (ctx) => {
  const id = ctx.params.id;
  const post = Post.getPost(id);
  ctx.body = post;
});

module.exports = router;
