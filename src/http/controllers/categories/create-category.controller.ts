import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { makeCreateCategoryUseCase } from "../../../use-cases/factories/categories/make-create-category-use-case";

const bodySchema = z.object({
    name: z.string()
});

export async function createCategoryController(request: FastifyRequest, reply: FastifyReply) {
    const body = bodySchema.parse(request.body);

    const createCategoryUsecase = makeCreateCategoryUseCase();

    try {
        const { category } = await createCategoryUsecase.execute(body);

        return reply.status(201).send(category);
    } catch (error) {
        return reply.status(400).send(error);
    }
}
