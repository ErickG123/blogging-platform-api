import { Post } from "@prisma/client"
import { PostsRepository } from "../../repositories/posts.repository"
import { PostNotFound } from "../errors/post-not-found.error";

interface FindPostUseCaseRequest {
    id: string
}

interface FindPostUseCaseResponse {
    post: Post
}

export class FindPostUseCase {
    constructor(
        private postsRepository: PostsRepository
    ) {}

    async execute({ id }: FindPostUseCaseRequest): Promise<FindPostUseCaseResponse> {
        const post = await this.postsRepository.findById(id);

        if (!post) throw new PostNotFound;

        return { post };
    }
}
