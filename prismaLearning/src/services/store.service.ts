import prisma from "../database/prisma";

export class StoreServices {
  async create(storeName: string) {
    return await prisma.store.create({ data: { name: storeName } });
  }
}
