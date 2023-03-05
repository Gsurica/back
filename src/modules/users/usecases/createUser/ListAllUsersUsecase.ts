import { UserRepository } from '../../repositories/User.repository';
import { IUserSchema } from '../../schemas/User';

class ListAllUsersUsecase {
  constructor(private readonly userRepository: UserRepository) {}

  async handle(): Promise<IUserSchema[]> {
    const users = await this.userRepository.listAll();
    return users;
  }
}

export { ListAllUsersUsecase };
