import React from "react";
import styled from "styled-components";
import Link from "next/link";
const DIV = styled.div`
  margin-top: 20px;
  /* background: linear-gradient(45deg, #fc466b, #3f5efb); */
  height: 500px;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  position: relative;
  scroll-behavior: smooth;

  .container-box {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 53%;
    left: 50%;
  }

  form {
    background: rgba(255, 255, 255, 0.3);
    padding: 3em;
    height: 100%;
    border-radius: 20px;
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.2);
    text-align: center;
    position: relative;
    transition: all 0.2s ease-in-out;
  }
  form p {
    font-weight: 500;
    color: #fff;
    opacity: 0.7;
    font-size: 1.4rem;
    margin-top: 0;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
  form a {
    text-decoration: none;
    color: #ddd;
    font-size: 12px;
  }
  form a:hover {
    text-shadow: 2px 2px 6px #00000040;
  }
  form a:active {
    text-shadow: none;
  }
  form input {
    background: transparent;
    width: 200px;
    padding: 0.7em;
    margin-bottom: 1em;
    border: none;
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 7px;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
    color: #fff;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
  form input:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  }
  form input[type="email"]:focus,
  form input[type="password"]:focus {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  }
  form input[type="button"] {
    width: 150px;
    font-size: 1rem;
  }
  form input[type="button"]:hover {
    cursor: pointer;
  }
  form input[type="button"]:active {
    background: rgba(255, 255, 255, 0.2);
  }
  form:hover {
    margin: 4px;
  }

  ::-moz-placeholder {
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  }

  :-ms-input-placeholder {
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  }

  ::placeholder {
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  }

  .drop {
    background: rgba(255, 255, 255, 0.3);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 10px 10px 60px -8px rgba(0, 0, 0, 0.2);
    position: absolute;
    transition: all 0.2s ease;
  }
  .drop-1 {
    height: 80px;
    width: 80px;
    top: -20px;
    left: -40px;
    z-index: -1;
  }
  .drop-2 {
    height: 80px;
    width: 80px;
    bottom: -30px;
    right: -10px;
  }
  .drop-3 {
    height: 100px;
    width: 100px;
    bottom: 120px;
    right: -50px;
    z-index: -1;
  }
  .drop-4 {
    height: 120px;
    width: 120px;
    top: -60px;
    right: -60px;
  }
  .drop-5 {
    height: 60px;
    width: 60px;
    bottom: 170px;
    left: 90px;
    z-index: -1;
  }

  a,
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
  span {
    color: #f24773;
    font-weight: 700;
  }

  @media (max-width: 413px) {
    form {
      padding: 1em;
    }

    form input {
      width: 163px;
      padding: 0.5em;
    }

    form input[type="button"] {
      width: 95px;
      font-size: 1rem;
      padding: 6px;
    }
    .drop-1 {
      height: 50px;
      width: 50px;
      top: -20px;
      left: -9px;
      z-index: -1;
    }
    .drop-2 {
      height: 50px;
      width: 50px;
      bottom: -30px;
      right: -10px;
    }
    .drop-3 {
      height: 60px;
      width: 60px;
      bottom: 120px;
      right: -15px;
      z-index: -1;
    }
    .drop-4 {
      height: 70px;
      width: 70px;
      top: -43px;
      right: -10px;
    }
    .drop-5 {
      height: 60px;
      width: 60px;
      bottom: 170px;
      left: 90px;
      z-index: -1;
    }
    form a {
      text-decoration: none;
      color: #ddd;
      font-size: 10px;
    }
  }
  @media (min-width: 414px) and (max-width: 575px) {
    form {
      padding: 2em;
    }

    form input {
      width: 185px;
      padding: 0.5em;
    }

    form input[type="button"] {
      width: 120px;
      font-size: 1rem;
      padding: 6px;
    }
    .drop-1 {
      height: 60px;
      width: 60px;
      top: -20px;
      left: -18px;
      z-index: -1;
    }
    .drop-2 {
      height: 70px;
      width: 70px;
      bottom: -38px;
      right: -10px;
    }
    .drop-3 {
      height: 70px;
      width: 70px;
      bottom: 120px;
      right: -18px;
      z-index: -1;
    }
    .drop-4 {
      height: 85px;
      width: 85px;
      top: -43px;
      right: -17px;
    }
    .drop-5 {
      height: 60px;
      width: 60px;
      bottom: 170px;
      left: 90px;
      z-index: -1;
    }
    form a {
      text-decoration: none;
      color: #ddd;
      font-size: 11px;
    }
  }
`;

const SignIn = () => {
  return (
    <DIV id="signin1">
      <div className="container-box">
        <form>
          <p>Welcome</p>
          <input type="email" placeholder="Email" />
          <br />
          <input type="password" placeholder="Password" />
          <br />
          <input type="button" value="Sign in" />
          <br />
          <a href="#pass-reset1">Forgot Password?</a>
          <br />
          <Link href="/signup">
            <a>
              Don't have an accunt yet? <span>Sign up</span>
            </a>
          </Link>
        </form>

        <div className="drops">
          <div className="drop drop-1"></div>
          <div className="drop drop-2"></div>
          <div className="drop drop-3"></div>
          <div className="drop drop-4"></div>
          <div className="drop drop-5"></div>
        </div>
      </div>
    </DIV>
  );
};

export default SignIn;