import { User } from '../entities/user.entity';
import { Repository } from '../../shared/interfaces/base.interface';

export interface IUserRepository extends Repository<User> {
  findByEmail(email: string): Promise<User | null>;
}
