import { StoreServices } from "./services/store.service";

const storeServices = new StoreServices();

(async () => {
  const response = await storeServices.create("Thalisu Store");

  console.log(response);
})();
