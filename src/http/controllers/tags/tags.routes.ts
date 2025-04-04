import { FastifyInstance } from "fastify";
import { createTagController } from "./create-tag.controller";

export async function tagsRoutes(app: FastifyInstance) {
    app.post("/tags", createTagController);
}
