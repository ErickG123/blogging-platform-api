import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { makeCreatePostUseCase } from "../../../use-cases/factories/posts/make-create-post-use-case";

const bodySchema = z.object({
    title: z.string(),
    content: z.string(),
    categoryId: z.string().uuid(),
    tagIds: z.array(z.string().uuid())
});

export async function createPostController(request: FastifyRequest, reply: FastifyReply) {
    const body = bodySchema.parse(request.body);

    const createPostController = makeCreatePostUseCase();

    try {
        const { post } = await createPostController.execute(body);

        return reply.status(201).send(post);
    } catch (error) {
        return reply.status(400).send(error);
    }
}
