import { Tag } from "@prisma/client"
import { TagsRepositroy } from "../../repositories/tags.repository"

interface CreateTagUseCaseRequest {
    name: string
}

interface CreateTagUseCaseResponse {
    tag: Tag
}

export class CreateTagUseCase {
    constructor(
        private tagsRepository: TagsRepositroy
    ) {}

    async execute({ name }: CreateTagUseCaseRequest): Promise<CreateTagUseCaseResponse> {
        const tag = await this.tagsRepository.create({
            name
        });
        
        return { tag };
    }
}
