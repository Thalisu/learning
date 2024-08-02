import { ProductServices } from "./services/product.service";
import { StoreServices } from "./services/store.service";

const storeServices = new StoreServices();

const productServices = new ProductServices();

(async () => {
  /*   const response = await storeServices.create("Thalisu Store");

  console.log(response); */

  /*   const response = await storeServices.createMany([
    "Carina Store",
    "Uneve Store",
  ]); */

  /*   const response = await productServices.create({
    name: "Computador",
    price: 2500,
    description: "Computador bonito",
    storeId: 6,
  }); */

  /*   const response = await storeServices.findOne(6); */

  /*   const response = await storeServices.findMany("Store"); */

  /*   const response = await storeServices.findOne(6); */

  /*   const response = await storeServices.findMany(undefined, undefined, 1); */

  /*   const response = await storeServices.updateOne(6, {
    name: "Uneve Store outros papo",
  });*/

  const response = await productServices.updateMany(6, { price: 4000 });

  console.log(response);
})();
