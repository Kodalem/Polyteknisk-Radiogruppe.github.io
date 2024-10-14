import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const commentsTable = sqliteTable("comments", {
    id: int().primaryKey({ autoIncrement: true }),
    name: text({ length: 128 }).notNull(),
    content: text({ length: 1024 }).notNull(),
    project_id: text().notNull(),
});

export const membersTable = sqliteTable("members", {
    student_id: text({length: 10}).primaryKey().notNull(),
    name: text({ length: 512 }).notNull(),
    university_email: text({ length: 512 }).notNull(),
    personal_email: text({ length: 512 }).notNull(),
    pronouns: text({ length: 512 }),
    gender: text({ length: 512 }),
    phone: text({ length: 512 }),
    paid_membership: int().notNull(),
});

export const peopleProjectAssignmentTable = sqliteTable("people_project_assignment", {
    student_id: text().notNull(),
    project_id: text().notNull(),
    role: text({ length: 512 }).notNull(),
});

export const projectTagsTable = sqliteTable("project_tags", {
    project_id: int().notNull(),
    tag: text({ length: 512 }).notNull(),
});

export const projectPageTable = sqliteTable("project_page", {
    project_id: text().primaryKey(),
    title: text({ length: 512 }).notNull(),
    pub_date: text().notNull(),
    description: text({ length: 512 }).notNull(),
    team_lead: text({ length: 512 }).notNull(),
});

export const eventPageTable = sqliteTable("event_page", {
    event_id: text().primaryKey(),
    title: text({ length: 512 }).notNull(),
    pub_date: text().notNull(),
    description: text({ length: 512 }).notNull(),
    link: text({ length: 512 }).notNull(),
});