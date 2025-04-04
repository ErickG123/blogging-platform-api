import { Category, Prisma } from "@prisma/client";
import { CategoriesRepository } from "../categories.repository";
import { prisma } from "../../lib/prisma";

export class PrismaCategoriesRepository implements CategoriesRepository {
    async create(data: Prisma.CategoryCreateInput): Promise<Category> {
        try {
            const category = await prisma.category.create({ data });

            return category;
        } catch (error) {
            console.error("Erro ao Criar a Catogoria: ", error);
            throw error;
        }
    }
}
