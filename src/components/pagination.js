import React, { Component } from "react";
import { PaginationStyled } from "../styles/components/pagination.styled";

export class Pagination extends Component {
  render() {
    const {
      coinsPerPage,
      totalCoins,
      paginate,
      nextPage,
      prevPage,
      currentPage,
    } = this.props;

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <PaginationStyled>
        <ul className="pagination justify-content-center">
          <li className={(currentPage === 1 ? "disabled " : "") + "page-item"}>
            <a
              className="page-link"
              href="#"
              onClick={() => prevPage(pageNumbers.length)}
            >
              <p>&laquo;</p>
            </a>
          </li>
          {pageNumbers.map((num) => (
            <li
              className={(currentPage === num ? "active " : "") + "page-item"}
              key={num}
            >
              <a onClick={() => paginate(num)} href="#" className="page-link">
                <p>{num}</p>
              </a>
            </li>
          ))}
          <li
            className={
              (currentPage === pageNumbers.length ? "disabled " : "") +
              "page-item"
            }
          >
            <a
              className="page-link"
              href="#"
              onClick={() => nextPage(pageNumbers.length)}
            >
              <p>&raquo;</p>
            </a>
          </li>
        </ul>
      </PaginationStyled>
    );
  }
}

export default Pagination;
