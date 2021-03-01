import React, { useState } from "react";
import useSortableData from "../utilities/sortableData";
import millify from "millify";
import Percentage from "./percentage";
import { CoinTableMobileStyled } from "../styles/components/coinMobile.styled";
import { useMediaQueries } from "@react-hook/media-query";

const CoinTableMobile = ({ coins }) => {
  const { items, requestSort, sortConfig } = useSortableData(coins);
  const [priceOptions, setPriceOptions] = useState(0);

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const changePriceOption = () => {
    return priceOptions !== 2
      ? setPriceOptions(priceOptions + 1)
      : setPriceOptions(0);
  };

  const { matches } = useMediaQueries({
    showSevenDay: "(min-width: 400px)",
  });

  return (
    <CoinTableMobileStyled>
      <div class="">
        <table class="table table-borderless">
          <thead>
            <tr class="table-header">
              <th scope="col">
                <a
                  onClick={() => requestSort("market_cap_rank")}
                  className={getClassNamesFor("market_cap_rank")}
                >
                  <p class="text-left">#</p>
                </a>
              </th>
              <th scope="col" class="pl-0">
                <a
                  onClick={() => requestSort("name")}
                  className={getClassNamesFor("name")}
                >
                  <p class="text-left">Name</p>
                </a>
              </th>

              <th scope="col">
                <a
                  onClick={() => requestSort("price_change_percentage_24h")}
                  className={
                    "percentage-col " +
                    getClassNamesFor("price_change_percentage_24h")
                  }
                >
                  <p class="text-center">24h</p>
                </a>
              </th>
              {matches.showSevenDay ? (
                <th scope="col">
                  <a
                    onClick={() =>
                      requestSort("price_change_percentage_7d_in_currency")
                    }
                    className={
                      "percentage-col " +
                      getClassNamesFor("price_change_percentage_7d_in_currency")
                    }
                  >
                    <p class="text-center">7d</p>
                  </a>
                </th>
              ) : null}
              <th scope="col" class="pr-0">
                <a
                  onClick={() => requestSort("current_price")}
                  className={"last-col " + getClassNamesFor("current_price")}
                >
                  <p class="text-right">Price</p>
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((coin) => (
              <tr key={coin.market_cap_rank}>
                <td class="coin-info align-middle">
                  <img className="coin-icon mr-2" src={coin.image} alt="icon" />
                </td>
                <td class="coin-info align-middle">
                  <p>
                    <strong>{coin.name}</strong>
                  </p>
                  <div class="d-flex">
                    <p class="mr-1">
                      <span class="badge badge-secondary">
                        {coin.market_cap_rank}
                      </span>
                    </p>
                    <p className="coin-symbol">{coin.symbol}</p>
                  </div>
                </td>
                <td class="coin-info text-center coin-percent-cell align-middle">
                  {coin.price_change_percentage_24h == null ? (
                    <p>N/A</p>
                  ) : (
                    <Percentage
                      value={coin.price_change_percentage_24h.toFixed(2)}
                    />
                  )}
                </td>
                {matches.showSevenDay ? (
                  <td class="coin-info text-center coin-percent-cell align-middle">
                    {coin.price_change_percentage_7d_in_currency == null ? (
                      <p>N/A</p>
                    ) : (
                      <Percentage
                        value={coin.price_change_percentage_7d_in_currency.toFixed(
                          2
                        )}
                      />
                    )}
                  </td>
                ) : null}
                <td class="coin-info coin-price text-right align-middle">
                  <a onClick={changePriceOption}>
                    <>
                      <p>
                        <strong>
                          $
                          {new Intl.NumberFormat({
                            minimumSignificantDigits: 3,
                          }).format(coin.current_price)}
                        </strong>
                      </p>
                      {priceOptions === 0 ? (
                        <p class="coin-mcap">MCap {millify(coin.market_cap)}</p>
                      ) : null}
                      {priceOptions === 1 ? (
                        <p class="coin-mcap">
                          Volume {millify(coin.total_volume)}
                        </p>
                      ) : null}
                      {priceOptions == 2 ? (
                        <p class="coin-mcap">
                          Supply {millify(coin.circulating_supply)}
                        </p>
                      ) : null}
                    </>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CoinTableMobileStyled>
  );
};

export default CoinTableMobile;
