import { Post } from "@prisma/client"
import { PostsRepository } from "../../repositories/posts.repository"

interface CreatePostUseCaseRequest {
    title: string
    content: string
    categoryId: string
    tagIds: string[]
}

interface CreatePostUseCaseResponse {
    post: Post
}

export class CreatePostUseCase {
    constructor(
        private postsRepository: PostsRepository
    ) { }

    async execute({
        title, content, categoryId, tagIds
    }: CreatePostUseCaseRequest): Promise<CreatePostUseCaseResponse> {
        const post = await this.postsRepository.create({
            title,
            content,
            category: {
                connect: { id: categoryId }
            },
            tags: {
                connect: tagIds.map(id => ({ id }))
            }
        });

        return { post };
    }
}
