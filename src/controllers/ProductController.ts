import type { Request, Response } from 'express';
import { ProductService } from '../services/ProductService.js';

export class ProductController {
  private postService = new ProductService();
  
  create = async (req: Request, res: Response) => {
    try {
      return await this.postService.create(req, res);
    } catch (error: unknown) {
      console.error("Error creating product:", error);
      return res.status(500).json({ message: "Erro ao criar produto" });
    }
  };

  list = async (req: Request, res: Response) => {
try {      return await this.postService.listAll(req, res);
    } catch (error: unknown) {
      console.error("Error listing products:", error);
      return res.status(500).json({ message: "Erro ao listar produtos" });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      return await this.postService.update(req, res);
    } catch (error: unknown) {
      console.error("Error updating product:", error);
      return res.status(500).json({ message: "Erro ao atualizar produto" });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {      return await this.postService.delete(req, res);
    } catch (error: unknown) {
      console.error("Error deleting product:", error);
      return res.status(500).json({ message: "Erro ao deletar produto" });
    }
  };
  
}