import React from "react";
import useSortableData from "../utilities/sortableData";
import millify from "millify";
import Percentage from "./percentage";
import {
  CoinTableMobileStyled,
  CoinTableDesktopStyled,
} from "../styles/components/coinMobile.styled";

const CoinTableMobile = ({ coins }) => {
  const { items, requestSort, sortConfig } = useSortableData(coins);

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <CoinTableMobileStyled>
      <CoinTableDesktopStyled>
        <div class="">
          <table class="table table-borderless">
            <thead>
              <tr class="table-header">
                <th scope="col">
                  <a
                    onClick={() => requestSort("market_cap_rank")}
                    className={
                      "rank-col " + getClassNamesFor("market_cap_rank")
                    }
                  >
                    <p>
                      <strong>#</strong>
                    </p>
                  </a>
                </th>
                <th scope="col" class="pl-0">
                  <a
                    onClick={() => requestSort("name")}
                    className={getClassNamesFor("name")}
                  >
                    <p>
                      <strong>Name</strong>
                    </p>
                  </a>
                </th>
                <th scope="col">
                  <a
                    onClick={() => requestSort("current_price")}
                    className={"price-col " + getClassNamesFor("current_price")}
                  >
                    <p>
                      <strong>Price</strong>
                    </p>
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
                    <p>
                      <strong>24h</strong>
                    </p>
                  </a>
                </th>
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
                    <p>
                      <strong>7d</strong>
                    </p>
                  </a>
                </th>

                <th scope="col">
                  <a
                    onClick={() => requestSort("market_cap")}
                    className={"mcap-col " + getClassNamesFor("market_cap")}
                  >
                    <p>
                      <strong>MCap</strong>
                    </p>
                  </a>
                </th>
                <th scope="col">
                  <a
                    onClick={() => requestSort("total_volume")}
                    className={"volume-col " + getClassNamesFor("total_volume")}
                  >
                    <p>
                      <strong>Volume</strong>
                    </p>
                  </a>
                </th>
                <th scope="col" class="pr-0">
                  <a
                    onClick={() => requestSort("circulating_supply")}
                    className={
                      "supply-col " + getClassNamesFor("circulating_supply")
                    }
                  >
                    <p>
                      <strong>Supply</strong>
                    </p>
                  </a>
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((coin) => (
                <tr key={coin.market_cap_rank}>
                  <td class="coin-info align-middle coin-icon-cell">
                    <img className="coin-icon" src={coin.image} alt="icon" />
                  </td>
                  <td class="coin-info align-middle coin-name-cell">
                    <p>
                      <strong>{coin.name}</strong>
                    </p>
                    <div class="d-flex">
                      <p class="mr-2">
                        <span class="badge badge-secondary">
                          {coin.market_cap_rank}
                        </span>
                      </p>
                      <p className="coin-symbol">{coin.symbol}</p>
                    </div>
                  </td>
                  <td class="coin-info coin-price text-center align-middle">
                    <p>
                      <strong>
                        $
                        {new Intl.NumberFormat({
                          minimumSignificantDigits: 3,
                        }).format(coin.current_price)}
                      </strong>
                    </p>
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
                  <td class="coin-info text-center coin-percent-cell align-middle">
                    <p>${millify(coin.market_cap)}</p>
                  </td>
                  <td class="coin-info text-center coin-percent-cell align-middle">
                    <p>${millify(coin.total_volume)}</p>
                  </td>

                  <td class="text-right p-0 coin-info coin-supply-cell">
                    <p class="text-right">
                      {millify(coin.circulating_supply)}{" "}
                      <span className="coin-symbol">{coin.symbol}</span>
                    </p>
                    {coin.total_supply ? (
                      <div style={{ position: "relative" }}>
                        <div
                          class="progress mt-1 d-flex w-100 justify-content-end coin-supply"
                          style={{ height: ".5em" }}
                        >
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{
                              width:
                                (coin.circulating_supply / coin.total_supply) *
                                  100 +
                                "%",
                              backgroundColor: "#00000030",
                            }}
                          ></div>
                        </div>
                      </div>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CoinTableDesktopStyled>
    </CoinTableMobileStyled>
  );
};

export default CoinTableMobile;
