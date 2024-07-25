/* model Product {
    id          Int      @id @default(autoincrement())
    name        String   @unique
    description String?
    price       Float
    storageInfo StorageInfo?
    storeId Int
    store Store @relation(fields: [storeId], references: [id])
    categories category[]
  } */

export interface IProduct {
  id: number;
  name: string;
  description?: string;
  price: number;
  storeId: number;
  /*     storageInfo?: IStorageInfo;
    store: IStore;
    categories: ICategory[]; */
}

export type TCreateProduct = Omit<IProduct, "id">;
