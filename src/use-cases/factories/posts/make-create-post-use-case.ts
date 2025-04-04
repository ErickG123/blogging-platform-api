import { PrismaPostsRepository } from "../../../repositories/prisma/prisma-posts.repository";
import { CreatePostUseCase } from "../../posts/create-post.use-case";

export function makeCreatePostUseCase() {
    return new CreatePostUseCase(new PrismaPostsRepository);
}
