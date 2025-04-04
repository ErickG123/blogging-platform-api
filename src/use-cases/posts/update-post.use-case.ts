import { Post } from "@prisma/client"
import { PostsRepository } from "../../repositories/posts.repository"

interface UpdatePostUseCaseRequest {
    title: string
    content: string
    categoryId: string
    tagIds: string[]
}

interface UpdatePostUseCaseRequestParams {
    id: string
}

interface UpdatePostUseCaseResponse {
    post: Post
}

export class UpdatePostUseCase {
    constructor(
        private postsRepositories: PostsRepository
    ) { }

    async execute({ id }: UpdatePostUseCaseRequestParams, {
        title,
        content,
        categoryId,
        tagIds
    }: UpdatePostUseCaseRequest): Promise<UpdatePostUseCaseResponse> {
        const post = await this.postsRepositories.update(
            id,
            {
                title,
                content,
                category: {
                    connect: { id: categoryId }
                },
                tags: {
                    set: tagIds.map(tagId => ({ id: tagId }))
                }
            }
        );

        return { post };
    }
}
