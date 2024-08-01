import { StoreController } from "./src/controller/store.controller"

const url = "https://api.escuelajs.co/api/v1/"

async function showData() {
  const storeController = new StoreController(url);
  try {
    const data = await storeController.getData("products");

    return data;
  } catch (e) {
    console.log(e);
  }
}
console.log(showData());
