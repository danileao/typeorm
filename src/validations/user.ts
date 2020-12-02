import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

export const validateUsers = [
  body("email").isEmail().withMessage("Invalid email"),
  body("name").notEmpty().withMessage("Incorrect name"),
  body("username").isLength({ min: 10 }).withMessage("Invalid username"),
  async (request: Request, response: Response, next: NextFunction) => {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
      return response.status(422).json({ errors: errors.array() });
    }

    return next();
  },
];
