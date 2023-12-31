import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from 'src/database/entities/user.entity'

@Module({
	imports: [TypeOrmModule.forFeature([UserEntity])],
	controllers: [],
	providers: [],
	exports: [],
})
export class UserModule {}
