import { Request, Response } from 'express';
import { UserRepository } from '../repositories/User.repository';
import { CreateUserUsecase } from '../usecases/createUser/CreateUserUsecase';

class CreateUserController {
  async execute(request: Request, response: Response): Promise<Response> {
    const createUserUseCase = new CreateUserUsecase(new UserRepository());
    const { username, email, password, name } = request.body;

    const user = await createUserUseCase.handle({
      username,
      email,
      password,
      name,
    });

    return response.status(200).json({
      type: 'Success',
      data: user,
    });
  }
}

export { CreateUserController };
