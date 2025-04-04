import { PrismaPostsRepository } from "../../../repositories/prisma/prisma-posts.repository";
import { FindAllPostsUseCase } from "../../posts/find-all-posts.use-case";

export function makeFindAllPostsUseCase() {
    return new FindAllPostsUseCase(new PrismaPostsRepository);
}
