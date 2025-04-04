import { PostsRepository } from "../../repositories/posts.repository";

interface DeletePostUseCaseRequest {
    id: string
}

export class DeletePostUseCase {
    constructor(
        private postsRepository: PostsRepository
    ) {}

    async execute({ id }: DeletePostUseCaseRequest): Promise<void> {
        this.postsRepository.delete(id);
    }
}
