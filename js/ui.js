const themeButton = document.getElementById("themeToggle");
const crypto = document.querySelector(".crypto-list");

themeButton.addEventListener("click", changeWindowTheme);

export function changeWindowTheme() {
  const body = document.body;
  body.setAttribute("data-theme", "dark");
}
function convertNumbers(number) {
  if (typeof number !== "number" || isNaN(number)) {
    return "0";
  }

  let suffix = "";

  if (number >= 1e12) {
    number = number / 1e12;
    suffix = "T"; // trillion
  } else if (number >= 1e9) {
    number = number / 1e9;
    suffix = "B"; // billion
  } else if (number >= 1e6) {
    number = number / 1e6;
    suffix = "M"; // million
  }

  let result = number.toFixed(1).replace(/\.0$/, "");
  return result + suffix;
}

export function getCryptoItem(cryptoData) {
  crypto.innerHTML = "";

  cryptoData.forEach((el) => {
    const card = document.createElement("div");
    card.classList.add("crypto-card");
    card.innerHTML = `
      <div class="crypto-card-header">
        <img src=${el.image} class="crypto-icon">
        <div class="crypto-info">
          <div class="crypto-name">${el.name}</div>
          <div class="crypto-symbol">${el.symbol}</div>
        </div>
        <span class="crypto-rank">${el.market_cap_rank}</span>
      </div>

      <div class="crypto-card-body">
        <div class="crypto-price">${el.current_price}</div>
        <span class="crypto-change positive">+2.50%</span>

        <div class="crypto-stats">
          <div class="crypto-stat">
            <span class="crypto-stat-label">Market Cap</span>
            <span class="crypto-stat-value">$${convertNumbers(
              el.market_cap
            )}</span> 
          </div>
          <div class="crypto-stat">
            <span class="crypto-stat-label">Total volume</span> 
            <span class="crypto-stat-value">$${convertNumbers(
              el.total_volume
            )}</span>
          </div>
          <div class="crypto-stat">
            <span class="crypto-stat-label">Highest 24h</span>
            <span class="crypto-stat-value">$${el.high_24h}</span>
          </div>
          <div class="crypto-stat">
            <span class="crypto-stat-label">Lowest 24h</span>
            <span class="crypto-stat-value">$${el.low_24h}</span>
          </div>
        </div>
      </div>

      <div class="crypto-card-footer">
        <button class="btn-favorite" data-coin-id="${el.id}">
          ☆
        </button>
        <button class="btn-card" data-action="chart" data-coin-id="${el.id}">
          📈 График
        </button>
        <button class="btn-card primary" data-action="add-portfolio" data-coin-id="${
          el.id
        }">
          💼 Портфель
        </button>
      </div>
    `;
    crypto.appendChild(card);
  });
}

const favoriteBtcArray =[];

function isFavorite(coinId) {
  return favoriteBtcArray.includes(coinId);
}

function toggleFavorite(coinId) {
  const index = favoriteBtcArray.indexOf(coinId);

  if (index === -1) {
    favoriteBtcArray.push(coinId);
  } else {
    favoriteBtcArray.splice(index, 1);
  }

  const button = document.querySelector(`button[data-coin-id="${coinId}"]`);

  if (button) {
    if (isFavorite(coinId)) {
      button.textContent = '⭐'; 
      button.classList.add('active'); 
    } else {
      button.textContent = '☆'; 
      button.classList.remove('active'); 
    }
  }
}

document.addEventListener('click', function(event) {
  if (event.target.classList.contains('btn-favorite')) {
    const coinId = event.target.dataset.coinId;
    toggleFavorite(coinId);
  }
});
