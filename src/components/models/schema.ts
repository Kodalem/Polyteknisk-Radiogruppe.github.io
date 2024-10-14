import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("comments", {
    id: int().primaryKey({ autoIncrement: true }),
    name: text().notNull(),
    content: text().notNull(),
});

export const membersTable = sqliteTable("members", {
    student_id: text().primaryKey().notNull(),
    name: text().notNull(),
    university_email: text().notNull(),
    personal_email: text().notNull(),
    phone: text(),
    paid_membership: int().notNull(),
});

export const peopleProjectAssignmentTable = sqliteTable("people_project_assignment", {
    student_id: text().notNull(),
    project_id: int().notNull(),
    role: text().notNull(),
});

export const projectTagsTable = sqliteTable("project_tags", {
    project_id: int().notNull(),
    tag: text().notNull(),
});


// This table creates header for the .mdx file, basically a way to build the events from the website.
export const eventPageTable = sqliteTable("event_page", {
    id: int().primaryKey({ autoIncrement: true }),
    title: text().notNull(),
    pub_date: text().notNull(),
    description: text().notNull(),
    link: text().notNull(),
});
