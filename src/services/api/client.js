export const defaultClient = axios.create({
  baseURL: process.env.STOCKS_BASE_URL,
});
