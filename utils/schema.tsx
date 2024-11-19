import { serial, text, varchar } from "drizzle-orm/mysql-core";
import { pgTable } from "drizzle-orm/pg-core";

export const AIOutput = pgTable('aiOutput',{
    // @ts-ignore
    id:serial('id').primaryKey(),
    formData:varchar('FormData').notNull(),
    aiResponse:text('aiResponse'),
    templateSlug:varchar("Temp-slug").notNull(),
    createdBy:varchar('createdBy'),
    createdAt: varchar('createdAt'),
})