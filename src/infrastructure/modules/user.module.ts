import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from '../controllers/user.controller';
import { UserRepository } from '../persistence/user.repository';
import { UserUseCases } from '../../application/use-cases/user.use-cases';
import { User } from '../../domain/entities/user.entity';
import { REPOSITORY_TOKENS } from '../../shared/constants/app.constants';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [
    UserRepository,
    {
      provide: REPOSITORY_TOKENS.USER_REPOSITORY,
      useClass: UserRepository,
    },
    UserUseCases,
  ],
  exports: [UserUseCases, REPOSITORY_TOKENS.USER_REPOSITORY],
})
export class UserModule {}
