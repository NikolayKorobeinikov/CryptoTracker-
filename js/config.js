// Константы

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1
export const API_BASE_URL = `https://api.coingecko.com/api/v3`;
export const API_END_POINTS = {
  markets: '/coins/markets ',
  marketChart: '/coins/{id}/market_chart',
  search: '/search',
  coin: '/coins/{id}',
  trending: '/search/trending'
}

export const DEFAULT_CURRENCY = 'usd';
export const DEFAULT_SORT = 'market_cup_desc';
export const PER_PAGE = 50;
export const CURRENCIES = {
  usd: {symbol: '$', name: 'US Dollar', },
  eur: {symbol: '€', name: 'Euro',},
  rub: {symbol: '₽', name: 'Russian Ruble', }
}
export const CHART_PERIODS = {
  1: '24 hours',
  7: '7 days',
  30: '30 days',
  365: 'one year'
}

export const UPDATE_INTERVAL = 60000;
