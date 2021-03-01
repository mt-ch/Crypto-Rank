import React from "react";

async function GetCoins( setCoins ) {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc";
  const response = await fetch(url);
  const data = await response.json();
  return setCoins(data);
}

export default GetCoins;

