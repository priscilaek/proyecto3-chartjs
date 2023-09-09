import Chart from 'chart.js/auto';

export const generateHistoricalChart = async (crypto) => {
  try {
    // 1. GENERACIÓN DE DATOS HISTÓRICOS
    const response = await fetch(`https://api.coincap.io/v2/assets/${crypto}/history?interval=d1`);
    const dataResponse = await response.json();
    console.log(`Historical data for ${crypto}`, dataResponse);

    const historicalData = dataResponse.data;

    // 2. VISTA INICIAL
    document.querySelector('#app-api').innerHTML = /* HTML */ `
      <div>
        <canvas id="historical-chart"></canvas>
      </div>
    `;

    // 3. GENERACIÓN DE GRÁFICA HISTÓRICA

    const historicalChartArea = document.querySelector('#historical-chart');
    console.log('historicalChartArea', historicalChartArea);

    const labels = historicalData.map((row) => row.date);
    const prices = historicalData.map((row) => parseFloat(row.priceUsd));

    new Chart(historicalChartArea, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: `${crypto} - Precio en USD`,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            data: prices,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      },
    });
  } catch (error) {
    console.error('Error fetching historical data:', error);
  }
};