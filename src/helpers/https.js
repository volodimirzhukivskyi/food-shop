import axios from "axios";

export const storeOrders = async (shopsData) => {
  await axios.post(
    "https://meal-shop-70269-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
    shopsData
  );
};

export async function fetchShops() {
  const response = await axios.get(
    "https://meal-shop-70269-default-rtdb.europe-west1.firebasedatabase.app/shops.json"
  );
  const shops = [];
  for (const key in response.data) {
    const shopsObj = {
      id: key,
      name: response.data[key].name,
      products: response.data[key].products,
    };
    shops.push(shopsObj);
  }
  return shops;
}
