const uuid = require("uuid");

const posts = new Map();

class Post {
  static createPost({ name, description }) {
    const id = uuid.v4();
    posts.set(id, { id, name, description, postedDate: new Date() });
  }

  static getPost(id) {
    return posts.get(id);
  }

  static getPosts() {
    return [...posts.values()];
  }
}

module.exports = Post;
