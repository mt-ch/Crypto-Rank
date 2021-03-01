import React, { Component } from "react";

export class RowSelect extends Component {
  render() {
    const { coinsPerPage, rowValueChange, remainingOptions } = this.props;
    const options = [100, 50, 25];

    return (
      <div class="d-flex align-items-center">
        <p class="mr-2">Show rows</p>
        <select
          class="custom-select custom-select-sm row-selector"
          onChange={rowValueChange}
        >
          <option selected value={coinsPerPage}>
            {coinsPerPage}
          </option>
          {options.map((option) =>
            // coinsPerPage == option (null) : (
            //     <option key={option} value={option}>
            //   {option}
            // </option>
            // )
            coinsPerPage == option ? null : (
              <option key={option} value={option}>
                {option}
              </option>
            )
          )}
        </select>
      </div>
    );
  }
}

export default RowSelect;
