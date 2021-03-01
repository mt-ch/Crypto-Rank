import React from "react";

const Header = ({ input, updateInput }) => {
  return (
    <div class="mb-4">
      <div class="d-flex justify-content-between align-items-center w-100 pb-3">
        <h1>
          <strong>Crypdex</strong>
        </h1>
        <div class="w-25">
          <input
            type="text"
            class="form-control"
            placeholder="Search"
            aria-label=""
            aria-described-by="basic-addon1"
            value={input}
            onChange={(e) => updateInput(e.target.value)}
          />
        </div>
      </div>
      <p>
        A cryptocurrency index of the top 250 coins, made using CoinGeckoAPI.
      </p>
      <a class="link" href="">
        <p>See the source code here.</p>
      </a>
    </div>
  );
};

export default Header;
