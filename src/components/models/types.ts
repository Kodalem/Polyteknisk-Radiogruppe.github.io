// src/models/types.ts
import type { InferSelectModel } from 'drizzle-orm';
import {commentsTable, membersTable} from './schema.ts';

export type Comment = InferSelectModel<typeof commentsTable>;
export type Membership = InferSelectModel<typeof membersTable>;