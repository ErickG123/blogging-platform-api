import { Post } from "@prisma/client";
import { PostsRepository } from "../../repositories/posts.repository";

interface FindAllPostsUSeCaseRequestQuery {
    term?: string
}

interface FindAllPostsUseCaseResponse {
    posts: Post[]
}

export class FindAllPostsUseCase {
    constructor(
        private postsRepository: PostsRepository
    ) {}

    async execute({ term }: FindAllPostsUSeCaseRequestQuery): Promise<FindAllPostsUseCaseResponse> {
        const posts = await this.postsRepository.findAll(term);

        return { posts: posts ?? [] }
    }
}
