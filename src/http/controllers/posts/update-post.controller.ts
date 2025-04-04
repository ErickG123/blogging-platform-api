import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { makeUpdatePostUseCase } from "../../../use-cases/factories/posts/make-update-post-use-case";

const bodySchema = z.object({
    title: z.string(),
    content: z.string(),
    categoryId: z.string().uuid(),
    tagIds: z.array(z.string().uuid())
});

const paramsSchema = z.object({
    id: z.string().uuid()
});

export async function updatePostController(request: FastifyRequest, reply: FastifyReply) {
    const body = bodySchema.parse(request.body);
    const params = paramsSchema.parse(request.params);

    const updatePostUseCase = makeUpdatePostUseCase();

    try {
        const { post } = await updatePostUseCase.execute(params, body);

        return reply.status(200).send(post);
    } catch (error) {
        return reply.status(400).send({ message: error });
    }
}
