import { Config } from 'node-json-db/dist/lib/JsonDBConfig'
import { resolve } from "path";

const jsonDatabaseConfig = new Config(resolve(__dirname, '../database/jsonDB/jsonDB'), true, false, '/')

export { jsonDatabaseConfig }