import { FastifyInstance } from "fastify";
import { createCategoryController } from "./create-category.controller";

export async function categoriesRoutes(app: FastifyInstance) {
    app.post("/categories", createCategoryController);
}
