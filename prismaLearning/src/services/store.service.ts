import prisma from "../database/prisma";
import { TUpdateStore } from "../interfaces/products.interface";

export class StoreServices {
  async create(storeName: string) {
    return await prisma.store.create({ data: { name: storeName } });
  }

  async createMany(storeNames: string[]) {
    const stores = storeNames.map((storeName) => ({ name: storeName }));

    return await prisma.store.createMany({ data: stores });
  }

  async findOne(storeId: number) {
    return await prisma.store.findFirst({
      where: { id: storeId },
      include: { products: true },
    });
  }

  async findMany(search?: string, take = 10, skip = 0) {
    return await prisma.store.findMany({
      where: { name: { contains: search, mode: "insensitive" } },
      take,
      skip,
    });
  }

  async updateOne(storeId: number, data: TUpdateStore) {
    return await prisma.store.update({ where: { id: storeId }, data });
  }
}
