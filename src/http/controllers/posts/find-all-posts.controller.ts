import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { makeFindAllPostsUseCase } from "../../../use-cases/factories/posts/make-find-all-posts-use-case";

const querySchema = z.object({
    term: z.string().optional()
});

export async function findAllPostsController(request: FastifyRequest, reply: FastifyReply) {
    const query = querySchema.parse(request.query);

    const findAllPostsUseCase = makeFindAllPostsUseCase();

    try {
        const { posts } = await findAllPostsUseCase.execute(query);

        return reply.status(200).send({ posts });
    } catch (error) {
        return reply.status(400).send(error);
    }
}
