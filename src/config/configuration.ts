export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  coingecko: {
    priceUrl: process.env.COINGECKO_PRICE_URL,
    balanceUrl: process.env.COINGECKO_BALANCE_URL,
    pingUrl: process.env.COINGECKO_PING_URL,
  },
});
