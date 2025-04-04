import { Prisma, Tag } from "@prisma/client";

export interface TagsRepositroy {
    create(data: Prisma.TagCreateInput): Promise<Tag>
}
