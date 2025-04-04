import { Post, Prisma } from "@prisma/client";
import { PostsRepository } from "../posts.repository";
import { prisma } from "../../lib/prisma";

export class PrismaPostsRepository implements PostsRepository {
    async create(data: Prisma.PostCreateInput): Promise<Post> {
        try {
            const post = await prisma.post.create({
                data,
                include: {
                    category: true,
                    tags: true
                }
            });

            return post;
        } catch (error) {
            console.error("Erro ao Criar o Post: ", error);
            throw error;
        }
    }

    async update(id: string, data: Prisma.PostUpdateInput): Promise<Post> {
        const post = await prisma.post.update({
            where: {
                id
            },
            data,
            include: {
                category: true,
                tags: true
            }
        });

        return post;
    }

    async delete(id: string): Promise<void> {
        await prisma.post.delete({
            where: {
                id
            }
        });
    }

    async findAll(term: string): Promise<Post[] | null> {
        const posts = await prisma.post.findMany({
            where: {
                OR: [
                    {
                        title: { contains: term }
                    },
                    {
                        content: { contains: term }
                    },
                    {
                        category: {
                            name: { contains: term }
                        }
                    }
                ]
            },
            include: {
                category: true,
                tags: true
            }
        });

        return posts;
    }

    async findById(id: string): Promise<Post | null> {
        const post = await prisma.post.findUnique({
            where: {
                id
            },
            include: {
                category: true,
                tags: true
            }
        });

        return post;
    }
}
