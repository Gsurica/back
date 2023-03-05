import { ICreateUserDTO } from '../../DTOs/CreateUserDTO';
import { UserRepository } from '../../repositories/User.repository';
import User, { IUserSchema } from '../../schemas/User';

class CreateUserUsecase {
  constructor(private readonly userRepository: UserRepository) {}

  async handle({
    username,
    email,
    password,
    name,
  }: ICreateUserDTO): Promise<IUserSchema> {
    const emailExists = await User.findOne({ email }).exec();
    const usernameExists = await User.findOne({ username }).exec();

    if (
      email === null &&
      password === null &&
      username === null &&
      name === null
    ) {
      throw new Error('Campos incompletos!');
    }

    if (emailExists) {
      throw new Error('Email já utilizado!');
    }

    if (usernameExists) {
      throw new Error('username já utilizado!');
    }

    return this.userRepository.create({ username, name, email, password });
  }
}

export { CreateUserUsecase };
