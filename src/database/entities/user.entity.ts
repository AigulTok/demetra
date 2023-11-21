import { Exclude } from 'class-transformer'
import { IsEmail } from 'class-validator'
import { Entity, Column, Index } from 'typeorm'

@Entity('user')
export class UserEntity {
	@Column({ nullable: false })
	name: string

	@Column({ nullable: true })
	@Index({ unique: true })
	@IsEmail()
	email: string

	@Column()
	@Exclude()
	password?: string
}
