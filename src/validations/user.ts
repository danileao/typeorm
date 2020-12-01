import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

export const validateUsers = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  await body("email").isEmail().withMessage("Invalid email").run(request);
  await body("username")
    .isLength({ min: 10 })
    .withMessage("Invalid username")
    .run(request);

  await body("name").notEmpty().withMessage("Incorrect name").run(request);

  const erros = validationResult(request);

  if (!erros.isEmpty()) {
    return response.status(422).json({ errors: erros.array() });
  }

  return next();
};
