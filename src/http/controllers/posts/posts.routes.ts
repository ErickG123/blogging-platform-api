import { FastifyInstance } from "fastify";
import { createPostController } from "./create-post.controller";
import { updatePostController } from "./update-post.controller";
import { deletePostController } from "./delete-post.controller";
import { findAllPostsController } from "./find-all-posts.controller";
import { findPostController } from "./find-post.controller";

export async function postsRoutes(app: FastifyInstance) {
    app.get("/posts", findAllPostsController);
    app.get("/posts/:id", findPostController);
    app.post("/posts", createPostController);
    app.put("/posts/:id", updatePostController);
    app.delete("/posts/:id", deletePostController);
}
