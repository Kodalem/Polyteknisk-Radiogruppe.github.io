import 'dotenv/config';
import { drizzle } from 'drizzle-orm/connect';
import * as schema from '../models/schema.ts';


// You can specify any property from the libsql connection options
export const db = await drizzle("libsql", { connection: { url: process.env.DB_FILE_NAME! }, schema: schema });

