import styled from "styled-components";

export const PaginationStyled = styled.nav`
  .pagination > li > a {
    color: black;
  }

  .pagination > li > a:focus,
  .pagination > li > a:hover,
  .pagination > li > span:focus,
  .pagination > li > span:hover {
    color: white !important;
    background-color: #545454;
    border-color: #4b4b4b;
  }

  .pagination > .active > a {
    color: white !important;
    background-color: #393939 !important;
    border: solid 1px #393939 !important;
  }

  .pagination > .active > a:hover {
    background-color: #393939 !important;
    border: solid 1px #393939 !important;
  }
`;
