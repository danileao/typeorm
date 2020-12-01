import { Router } from "express";

import ProductController from "../controllers/ProductController";
import UserController from "../controllers/UserController";

import { validateUsers } from "../validations/user";

const router = Router();

router.post("/products", ProductController.create);
router.post("/users", validateUsers, UserController.create);

export default router;
