import { ICreateUserDTO } from '../DTOs/CreateUserDTO';
import { IListUsersDTO } from '../DTOs/ListUsersDTO';
import User, { IUserSchema } from '../schemas/User';

class UserRepository {
  async create({
    username,
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<IUserSchema> {
    const user = await User.create({ username, name, email, password });
    return user;
  }

  async listAll(): Promise<IUserSchema[]> {
    const users = await User.find();
    return users;
  }
}

export { UserRepository };
