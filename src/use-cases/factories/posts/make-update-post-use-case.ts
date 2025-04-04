import { PrismaPostsRepository } from "../../../repositories/prisma/prisma-posts.repository"
import { UpdatePostUseCase } from "../../posts/update-post.use-case"

export function makeUpdatePostUseCase() {
    return new UpdatePostUseCase(new PrismaPostsRepository);
}
