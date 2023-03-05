import { Request, Response } from 'express';
import { UserRepository } from '../repositories/User.repository';
import { ListAllUsersUsecase } from '../usecases/createUser/ListAllUsersUsecase';

class ListAllController {
  async execute(request: Request, response: Response): Promise<Response> {
    const userRepository = new ListAllUsersUsecase(new UserRepository());
    const users = await userRepository.handle();

    return response.status(200).json({
      type: 'Success',
      data: users,
    });
  }
}

export { ListAllController };
