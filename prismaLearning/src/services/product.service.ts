import prisma from "../database/prisma";
import {
  TCreateProduct,
  TUpdateProduct,
} from "../interfaces/products.interface";

export class ProductServices {
  async create(body: TCreateProduct) {
    return await prisma.product.create({ data: body });
  }

  async updateMany(storeId: number, data: TUpdateProduct) {
    return await prisma.product.updateMany({
      where: { storeId },
      data,
    });
  }

  async deleteOne(id: number) {
    return await prisma.product.delete({ where: { id } });
  }
}
