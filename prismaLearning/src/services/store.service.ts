import prisma from "../database/prisma";

export class StoreServices {
  async create(storeName: string) {
    return await prisma.store.create({ data: { name: storeName } });
  }

  async createMany(storeNames: string[]) {
    const stores = storeNames.map((storeName) => ({ name: storeName }));

    return await prisma.store.createMany({ data: stores });
  }

  async findOne(storeId: number) {
    return await prisma.store.findFirst({ where: { id: storeId } });
  }
}
