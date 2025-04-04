import { PrismaPostsRepository } from "../../../repositories/prisma/prisma-posts.repository";
import { FindPostUseCase } from "../../posts/find-post.use-case";

export function makeFindPostUseCase() {
    return new FindPostUseCase(new PrismaPostsRepository);
}

