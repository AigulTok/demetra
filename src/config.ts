// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as dotenv from 'dotenv'
import { config as dotenvConfig } from 'dotenv'

dotenvConfig()

export type DBType =
	| 'mysql'
	| 'mariadb'
	| 'postgres'
	| 'cockroachdb'
	| 'sqlite'
	| 'mssql'

export const config = {
	env: process.env.NODE_ENV || 'development',
	app: {
		port: parseInt(process.env.APP_PORT || '3000', 10) || 3000,
	},
	database: {
		type: (process.env.DB_TYPE || 'postgres') as DBType,
		host: process.env.DB_HOST || 'localhost',
		port: parseInt(process.env.DB_PORT || '5432', 10) || 5432,
		user: process.env.DB_USER || 'root',
		password: process.env.DB_PASSWORD || 'password',
		name: process.env.DB_NAME || 'app',
	},
}
