const canvas = document.getElementById("priceChart");
let context;
let chart = null;

export async function openChartModal(coinId) {
  const modal = document.getElementById("chartModal");
  modal.classList.add("show");

  if (!context) {
    context = canvas.getContext("2d");
  }
  await getChart(coinId);
}

const createLineChart = (xData, yData) => {
  let data = {
    labels: xData,
    datasets: [
      {
        label: "Цена (USD)", yData,
        pointStyle: false,
        fill: true,
        borderWidth: 1,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };
  let config = {
    type: "line",
    data: data,
  };

  if (chart) {
    chart.destroy();
  }
  chart = new Chart(context, config);
};

export async function getChart(coinId) {
  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`);
    console.log(response);
    if (response.ok) {
      const chartData = await response.json();
      console.log(chartData);
      let xData = chartData.prices.map((item) =>
        new Date(item[0]).toLocaleDateString()
      );
      let yData = chartData.prices.map((item) => item[1]);

      createLineChart(xData, yData);
    } else {
      console.log("your request is failed");
    }
  } catch (error) {
    console.log(error);
  }
}