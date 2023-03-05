import { Router } from 'express';
import { ListAllController } from '../controllers/ListAll.controller';
import { CreateUserController } from '../controllers/User.controller';

const createUserController = new CreateUserController();
const listAllUserController = new ListAllController();

const userRoutes = Router();

userRoutes.post('/', createUserController.execute);
userRoutes.get('/', listAllUserController.execute);

export { userRoutes };
