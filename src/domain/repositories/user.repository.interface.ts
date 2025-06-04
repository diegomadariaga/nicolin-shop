import { User } from '../entities/user.entity';
import { Repository } from '../../shared/interfaces/base.interface';

export interface IUserRepository extends Repository<User> {
  findAll(): Promise<User[]>;
  findById(id: number): Promise<User | null>;
  create(userData: Partial<User>): Promise<User>;
  update(id: number, userData: Partial<User>): Promise<User | null>;
  delete(id: number): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
}
