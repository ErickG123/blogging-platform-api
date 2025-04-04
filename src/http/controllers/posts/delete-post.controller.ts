import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { makeDeletePostUseCase } from "../../../use-cases/factories/posts/make-delete-post-use-case";

const paramsSchema = z.object({
    id: z.string()
});

export async function deletePostController(request: FastifyRequest, reply: FastifyReply) {
    const params = paramsSchema.parse(request.params);

    const deletePostUseCase = makeDeletePostUseCase();

    try {
        await deletePostUseCase.execute(params);

        return reply.status(204).send({ message: "Post deleted."});
    } catch (error) {
        return reply.status(400).send(error);
    }
}
