// src/models/types.ts
import type { InferSelectModel } from 'drizzle-orm';
import { comments } from './schema.ts';

export type Comment = InferSelectModel<typeof comments>;
export type Membership = InferSelectModel<typeof membersTable>;