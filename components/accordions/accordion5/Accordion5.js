import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Open+Sans);
  @import url(https://fonts.googleapis.com/css?family=Montserrat:700);
  h1 {
    text-align: center;
    font-family: Montserrat, sans-serif;
    color: #333;
  }

  .accordion {
    width: 100%;
    max-width: 1080px;
    height: 250px;
    overflow: hidden;
    margin: 50px auto;
  }
  .accordion ul {
    width: 100%;
    display: table;
    table-layout: fixed;
    margin: 0;
    padding: 0;
  }
  .accordion ul li {
    display: table-cell;
    vertical-align: bottom;
    position: relative;
    width: 16.666%;
    height: 250px;
    object-fit: scale-down;
    background-repeat: no-repeat;
    background-position: center center;
    transition: all 500ms ease;
  }
  .accordion ul li div {
    display: block;
    overflow: hidden;
    width: 100%;
  }
  .accordion ul li div a {
    display: block;
    height: 250px;
    width: 100%;
    position: relative;
    z-index: 3;
    padding: 15px 20px;
    box-sizing: border-box;
    color: #fff;
    text-decoration: none;
    font-family: Open Sans, sans-serif;
    transition: all 200ms ease;
  }
  .accordion ul li div a * {
    opacity: 0;
    margin: 0;
    width: 100%;
    text-overflow: ellipsis;
    position: relative;
    z-index: 5;
    white-space: nowrap;
    overflow: hidden;
    -webkit-transform: translateX(-20px);
    transform: translateX(-20px);
    -webkit-transition: all 400ms ease;
    transition: all 400ms ease;
  }
  .accordion ul li div a h2 {
    font-family: Montserrat, sans-serif;
    text-overflow: clip;
    font-size: 24px;
    text-transform: uppercase;
    margin-bottom: 2px;
    top: 160px;
  }
  .accordion ul li div a p {
    top: 160px;
    font-size: 13.5px;
  }
  .accordion ul li:nth-child(1) {
    background-image: url("./images/html.png");
  }
  .accordion ul li:nth-child(2) {
    background-image: url("./images/js.jpg");
  }
  .accordion ul li:nth-child(3) {
    background-image: url("./images/react.jpg");
  }
  .accordion ul li:nth-child(4) {
    background-image: url("./images/styled-components.png");
  }
  .accordion ul li:nth-child(5) {
    background-image: url("./images/redux.jpg");
  }
  .accordion ul li:nth-child(6) {
    background-image: url("./images/nextjs.png");
  }
  .accordion ul:hover li,
  .accordion ul:focus-within li {
    width: 8%;
  }
  .accordion ul li:focus {
    outline: none;
  }
  .accordion ul:hover li:hover,
  .accordion ul li:focus,
  .accordion ul:focus-within li:focus {
    width: 60%;
  }
  .accordion ul:hover li:hover a,
  .accordion ul li:focus a,
  .accordion ul:focus-within li:focus a {
    background: rgba(0, 0, 0, 0.4);
  }
  .accordion ul:hover li:hover a *,
  .accordion ul li:focus a *,
  .accordion ul:focus-within li:focus a * {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  .accordion ul:hover li {
    width: 8% !important;
  }
  .accordion ul:hover li a * {
    opacity: 0 !important;
  }
  .accordion ul:hover li:hover {
    width: 60% !important;
  }
  .accordion ul:hover li:hover a {
    background: rgba(0, 0, 0, 0.4);
  }
  .accordion ul:hover li:hover a * {
    opacity: 1 !important;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  @media screen and (max-width: 600px) {
    body {
      margin: 0;
    }

    .accordion {
      height: auto;
    }
    .accordion ul li,
    .accordion ul li:hover,
    .accordion ul:hover li,
    .accordion ul:hover li:hover {
      position: relative;
      display: table;
      table-layout: fixed;
      width: 100%;
      -webkit-transition: none;
      transition: none;
    }
  }
  .about {
    text-align: center;
    font-family: "Open Sans", sans-serif;
    font-size: 12px;
    color: #666;
  }
  .about a {
    color: blue;
    text-decoration: none;
  }
  .about a:hover {
    text-decoration: underline;
  }
`;

const Accordion5 = () => {
  return (
    <DIV>
      <div className="accordion">
        <ul>
          <li tabindex="1">
            <div>
              <a href="#">
                <h2>Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </a>
            </div>
          </li>
          <li tabindex="2">
            <div>
              <a href="#">
                <h2>Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </a>
            </div>
          </li>
          <li tabindex="3">
            <div>
              <a href="#">
                <h2>Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </a>
            </div>
          </li>
          <li tabindex="4">
            <div>
              <a href="#">
                <h2>Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </a>
            </div>
          </li>
          <li tabindex="5">
            <div>
              <a href="#">
                <h2>Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </a>
            </div>
          </li>
          <li tabindex="6">
            <div>
              <a href="#">
                <h2>Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </DIV>
  );
};

export default Accordion5;
