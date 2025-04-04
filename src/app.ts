import fastify from "fastify";
import cors from "@fastify/cors";
import { categoriesRoutes } from "./http/controllers/categories/categories.routes";
import { tagsRoutes } from "./http/controllers/tags/tags.routes";
import { postsRoutes } from "./http/controllers/posts/posts.routes";

export const app = fastify();

app.register(cors, {
    origin: true
});

app.register(categoriesRoutes);
app.register(tagsRoutes);
app.register(postsRoutes);
