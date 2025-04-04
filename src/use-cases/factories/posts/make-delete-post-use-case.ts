import { PrismaPostsRepository } from "../../../repositories/prisma/prisma-posts.repository";
import { DeletePostUseCase } from "../../posts/delete-post.use-case";

export function makeDeletePostUseCase() {
    return new DeletePostUseCase(new PrismaPostsRepository);
}
