import React from "react";

const Footer = () => {
  return (
    <div class="footer mt-4">
      <div class="d-flex w-100 justify-content-between align-items-end ">
        <a href="https://mt-ch.net" class="footer-link">
          <p>2021 © mt-ch.net</p>
        </a>
        <div class="d-flex">
          <a class="mr-4 footer-link" href="https://github.com/mt-ch/crypto-rank">
            <p>Source</p>
          </a>
          <a href="https://github.com/mt-ch" class="footer-link">
            <p>Github</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
