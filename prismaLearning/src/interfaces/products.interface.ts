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

export interface IStore {
  id: number;
  name: string;
  products?: IProduct[];
}

export type TUpdateStore = Partial<Pick<IStore, "name">>;

export type TCreateProduct = Omit<IProduct, "id">;

export type TUpdateProduct = Partial<Omit<IProduct, "id" | "storeId">>;
