import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

import ProductRepository from "../repositories/ProductRepository";

class ProductController {
  async create(request: Request, response: Response) {
    const productRepository = getCustomRepository(ProductRepository);

    const { name, description, price, quantity } = request.body;

    const product = productRepository.create({
      name,
      description,
      price,
      quantity,
    });

    await productRepository.save(product);

    return response.json(product);
  }
}

export default new ProductController();
