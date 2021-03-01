import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        outline: none;
    }

    html, body {
        scroll-behavior: smooth;
    }

    *, *::after, *::before {
        box-sizing: border-box; 
    }

    body {
        height: 100vh;
        width: 100vw;
        text-rendering: optimizeLegibility;
        font-size: calc(1em + 1vw);
        background: #141414;
        color: #fff;
    }

    a   {
        color: white;
        &:hover{
            color: #ececec;
        }
    }

    ul{
        margin: 0;
    }

    thead, td{
        border-bottom: #ffffff20 solid 1px!important;
    }

    .app{
        padding: 1em clamp(1em, 6vw, 6em)
    }

    .loading{
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 10vh;
    }

    .row-selector{
        width: 5em;
    }

    @media (max-width: 595px) {
    .table-controls {
      display: flex;
      flex-direction: column;
      .pagination-container {
        margin-bottom: 1em;
      }
    }
  }
  
    h1, h2, p{
        font-family: "Be Vietnam"
    }

    p{
        font-size: .7em;
        margin: 0;
    }

    @media(min-width: 550px){
        p{
            font-size: .55em;
        }
    }

    @media(min-width: 700px){
        p{
            font-size: .6em;
        }
    }

`;
