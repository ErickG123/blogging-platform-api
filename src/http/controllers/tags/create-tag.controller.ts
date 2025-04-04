import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { makeCreateTagUseCase } from "../../../use-cases/factories/tags/make-create-tag-use-case";

const bodySchema = z.object({
    name: z.string()
});

export async function createTagController(request: FastifyRequest, reply: FastifyReply) {
    const body = bodySchema.parse(request.body);

    const createTagUseCase = makeCreateTagUseCase();

    try {
        const { tag } = await createTagUseCase.execute(body);

        return reply.status(201).send(tag);
    } catch (error) {
        return reply.status(400).send(error);
    }
}
