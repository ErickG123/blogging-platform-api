import { Post, Prisma } from "@prisma/client";

export interface PostsRepository {
    create(data: Prisma.PostCreateInput): Promise<Post>
    update(id: string, data: Prisma.PostUpdateInput): Promise<Post>
    delete(id: string): void
    findAll(term?: string): Promise<Post[] | null>
    findById(id: string): Promise<Post | null>
}
