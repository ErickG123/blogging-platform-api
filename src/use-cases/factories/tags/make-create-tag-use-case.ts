import { PrismaTagsRepository } from "../../../repositories/prisma/prisma-tags.repository";
import { CreateTagUseCase } from "../../tags/create-tag.use-case";

export function makeCreateTagUseCase() {
    return new CreateTagUseCase(new PrismaTagsRepository);
}
