import { Prisma, Tag } from "@prisma/client";
import { TagsRepositroy } from "../tags.repository";
import { prisma } from "../../lib/prisma";

export class PrismaTagsRepository implements TagsRepositroy {
    async create(data: Prisma.TagCreateInput): Promise<Tag> {
        try {
            const tag = await prisma.tag.create({ data });

            return tag;
        } catch (error) {
            console.error("Erro ao Criar a Tag: ", error);
            throw error;
        }
    }
}
