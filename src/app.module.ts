import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { config } from './config'
import { UserModule } from './user/user.module'

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: config.database.type,
			host: config.database.host,
			port: config.database.port,
			username: config.database.user,
			password: config.database.password,
			database: config.database.name,
			entities: [__dirname + '/../../src/database/entities/*.entity{.ts,.js}'],
			synchronize: config.env === 'development',
		}),
		UserModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
