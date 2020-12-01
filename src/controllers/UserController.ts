import { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { getCustomRepository } from "typeorm";

import UserRepository from "../repositories/UserRepository";

class UserController {
  async create(request: Request, response: Response) {
    const userRepository = getCustomRepository(UserRepository);

    const { name, username, email } = request.body;

    const user = userRepository.create({
      name,
      username,
      email,
    });

    await userRepository.save(user);

    return response.json(user);
  }
}

export default new UserController();
