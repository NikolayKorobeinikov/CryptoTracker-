import { changeWindowTheme, getCryptoItem } from "./ui.js";
import { getFetchApi, allCrypto } from "./api.js";
// import { getChart } from "./chart.js";

async function initApp() {
  await getFetchApi(); 
  // getChart();          
}

initApp();

// id, name, symbol, current_price, price_change_percentage_24h

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", handleSearch);

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    handleSearch();
  }
});

function handleSearch() {
  if (searchInput.value.trim() === "") {
    console.log("the field is empty");
    return;
  }

  const findCrypto = allCrypto.find((el) => {
    return (
      el.name.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      el.symbol.toLowerCase().includes(searchInput.value.toLowerCase())
    );
  });
  console.log(findCrypto);

  if (findCrypto) {
    getCryptoItem([findCrypto]);
  } else {
    console.log("такой крипты нет!");
  }
  searchInput.value = "";
}
