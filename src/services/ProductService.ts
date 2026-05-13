import type { Request, Response } from "express";
import { AppDataSource } from "../data-source.js";
import { Product } from "../entities/Product.js";

export class ProductService {
  private productRepo = AppDataSource.getRepository(Product);

  async create(req: Request, res: Response) {
    const { name, price, quantity } = req.body;
    const product = this.productRepo.create({ name, price, quantity });
    await this.productRepo.save(product);
    return res.status(201).json(product);
  };

  async listAll(req: Request, res: Response) {
    const products = await this.productRepo.find();
    return res.json(products);
  };

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const { name, price, quantity } = req.body;
    const product = await this.productRepo.findOneBy({ id });
    if (!product) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }
    product.name = name ?? product.name;
    product.price = price ?? product.price;
    product.quantity = quantity ?? product.quantity;
    await this.productRepo.save(product);
    return res.json(product);
  };

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    const product = await this.productRepo.findOneBy({ id });
    if (!product) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }
    await this.productRepo.remove(product);
    return res.status(204).send();
  };

}