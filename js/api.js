import { getCryptoItem } from "./ui.js";

export let allCrypto = [];

export async function getFetchApi() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1"
    );
    console.log(response);
    if (response.ok) {
      const coinsData = await response.json();
      console.log(coinsData);

      allCrypto = coinsData;

      getCryptoItem(coinsData);
    } else {
      console.log("your request is failed");
    }
  } catch (error) {
    console.log(error);
  }
}
