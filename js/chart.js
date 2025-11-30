

// export async function getChart() {
//   try {
//     const response = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7'); 
//     console.log(response); 
//     if (response.ok) {
//       const chartData = await response.json();
//       console.log(chartData);

//       // allCrypto = coinsData;
//       // getCryptoItem(coinsData)
//     } else {
//       console.log("your request is failed");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }