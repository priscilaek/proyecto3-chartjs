import './style.css';
import { getData } from './dbChart';
import { generateExChart } from './exChart';
import { generateHistoricalChart } from './historicalChart';
// DB json
getData();

// Const Data
generateExChart();

// HISTORICAL API
// Obtén el elemento select
const cryptoSelector = document.getElementById('cryptoSelector');
// Agrega un evento de cambio al selector
cryptoSelector.addEventListener('change', () => {
    const selectedCrypto = cryptoSelector.value;
    generateHistoricalChart(selectedCrypto);
});

// Llama a generateHistoricalChart inicialmente con el valor seleccionado actual
generateHistoricalChart(cryptoSelector.value);