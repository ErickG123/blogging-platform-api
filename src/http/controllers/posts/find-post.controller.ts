import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { makeFindPostUseCase } from "../../../use-cases/factories/posts/make-find-post-use-case";
import { PostNotFound } from "../../../use-cases/errors/post-not-found.error";
const paramsSchema = z.object({
    id: z.string().uuid()
});

export async function findPostController(request: FastifyRequest, reply: FastifyReply) {
    const params = paramsSchema.parse(request.params);

    const findPostUseCase = makeFindPostUseCase();

    try {
        const { post } = await findPostUseCase.execute(params);

        return reply.status(200).send(post);
    } catch (error) {
        if (error instanceof PostNotFound) {
            return reply.status(404).send({ message: error.message });
        }

        return reply.status(400).send(error);
    }
}
