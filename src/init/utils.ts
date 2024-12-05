export const buildUrl = (...urls: string[]) => {
  return urls.join("");
};

export const JUPYTER_BASE_URL = "https://quote-api.jup.ag/v6";

export const JUPYTER_SOL_ADDRESS =
  "So11111111111111111111111111111111111111112";
export const JUPYTER_USDT_ADDRESS =
  "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB";

export const wait = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));
