import React, { Component } from "react";
import { GlobalStyles } from "./styles/global";
// import GetCoins from "./components/getCoins";
import CoinTable from "./components/coinTableDesktop";
import CoinTableMobile from "./components/coinTableMobile";
import Footer from "./components/footer";
import Pagination from "./components/pagination";
import axios from "axios";
import RowSelect from "./components/rowSelect";
import Header from "./components/header";

export class App extends Component {
  state = {
    coins: [],
    coinsListDefault: [],
    loading: false,
    currentPage: 1,
    coinsPerPage: 50,
    remainingOptions: [50, 25],
    input: "",
    theme: "dark",
    matches: window.matchMedia("(min-width: 595px)").matches,
  };

  componentDidMount() {
    const getCoins = async () => {
      this.setState({ loading: true });
      const results = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&price_change_percentage=7d%2C%2024h&per_page=250"
      );
      this.setState({ coins: results.data });
      this.setState({ coinsListDefault: results.data });
      this.setState({ loading: false });
    };

    const handler = (e) => this.setState({ matches: e.matches });
    window.matchMedia("(min-width: 595px)").addListener(handler);
    getCoins();
  }

  render() {
    const {
      currentPage,
      coinsPerPage,
      coins,
      coinsListDefault,
      input,
      loading,
      remainingOptions,
      theme,
    } = this.state;

    const indexOfLastPost = currentPage * coinsPerPage;
    const indexOfFirstPost = indexOfLastPost - coinsPerPage;
    const currentCoins = coins.slice(indexOfFirstPost, indexOfLastPost);

    const toggleTheme = () => {
      if (theme === "light") {
        this.setState({ theme: "dark" });
      } else {
        this.setState({ theme: "light" });
      }
    };

    const paginate = (pageNum) => this.setState({ currentPage: pageNum });

    const nextPage = (length) => {
      if (currentPage === length) return null;
      else return this.setState({ currentPage: currentPage + 1 });
    };

    const prevPage = () => {
      if (currentPage === 1) return null;
      else if (currentPage > 1)
        return this.setState({ currentPage: currentPage - 1 });
    };

    const rowValueChange = (event) => {
      this.setState({ currentPage: 1 });
      return this.setState({ coinsPerPage: event.target.value });
    };

    const updateInput = async (input) => {
      const filtered = coinsListDefault.filter((coin) => {
        return coin.name.toLowerCase().includes(input.toLowerCase());
      });
      this.setState({ input: input });
      this.setState({ coins: filtered });
      this.setState({ currentPage: 1 });
    };

    return (
      <>
        <GlobalStyles />
        <div class="app">
          <Header input={input} updateInput={updateInput} />
          {loading ? (
            <div class="loading">
              <div class="spinner-grow" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          ) : coins == false ? (
            <div class="loading">
              <p class="text-center">
                <strong>Sorry I couldn't find that coin!</strong>
              </p>
            </div>
          ) : (
            <>
              <div class="mb-3 d-flex justify-content-end">
                {/* <RowSelect
                  rowValueChange={rowValueChange}
                  coinsPerPage={coinsPerPage}
                  remainingOptions={remainingOptions}
                /> */}
              </div>
              {this.state.matches && (
                <CoinTable coins={currentCoins} loading={loading} />
              )}
              {!this.state.matches && (
                <CoinTableMobile coins={currentCoins} loading={loading} />
              )}
              <div class="w-100 d-flex justify-content-between align-items-center table-controls mt-4 pt-2">
                <div class="pagination-container">
                  <Pagination
                    coinsPerPage={coinsPerPage}
                    totalCoins={coins.length}
                    paginate={paginate}
                    nextPage={nextPage}
                    prevPage={prevPage}
                    currentPage={currentPage}
                  />
                </div>
                <RowSelect
                  rowValueChange={rowValueChange}
                  coinsPerPage={coinsPerPage}
                  remainingOptions={remainingOptions}
                />
              </div>
            </>
          )}
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
