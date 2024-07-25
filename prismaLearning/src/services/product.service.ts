import prisma from "../database/prisma";
import { TCreateProduct } from "../interfaces/products.interface";

export class ProductServices {
  async create(body: TCreateProduct) {
    return await prisma.product.create({ data: body });
  }
}
