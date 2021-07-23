import { Request, Response } from 'express';

import { CreateUserService } from '../service/CreateUserService';

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password, admin } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({ name, email, password, admin });

    return response.json(user);
  }
}

export { CreateUserController };
