import { React, useState } from "react";
import { Modal } from "react-bootstrap";
import { login } from "../api/loginApi";
import Logo from "../assets/images/logo.svg";
import Theater from "../assets/images/icon/theater.svg";
import LogoBlack from "../assets/images/logo-black.svg";
import "../assets/css/steps/style.css";
import "../assets/css/animate.min.css";
import "../assets/css/bootstrap-float-label.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/custom.css";
// import "../assets/css/datetimepicker.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/main-style.css";
// import "../assets/css/owl.carousel.min.css";
import "../assets/css/owl.theme.default.css";
import "../assets/css/owl.theme.default.min.css";
import "../assets/css/select2.min.css";
import GuidePostMic from "./GuidePostMic";
//import "../assets/css/taggle.min.css";

function DashboardHeader() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState({});
  const [passwordErr, setPasswordErr] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();

    const isValid = formValidation();
    if (isValid) {
      setEmail("");
      setPassword("");
    }

    const loginData = {
      email: email,
      password: password,
    };

    try {
      login(loginData).then((result) => {
        if (result) {
          switch (result.code) {
            case 200:
              if (result.status === "OK") {
                console.log("Login successful.");
              } else {
                console.log(result.message);
              }
              break;
            case 400:
              console.log("Bad request.");
              break;
            case 401:
              console.log("Session Is Expired Please Login Again");
              break;
            case 500:
              console.log("Server error.");
              break;
            default:
              console.log(result.message);
              break;
          }
        }
      });
    } catch (err) {
      console.log("Something Went Wrong");
    }
  };

  const formValidation = () => {
    const emailErr = {};
    const passwordErr = {};
    let isValid = true;

    if (email.trim().length === 0) {
      emailErr.emailRequired = "Email is required!";
      isValid = false;
    }

    if (!email.includes("@")) {
      emailErr.emailInvalid = "Email address is not valid!";
      isValid = false;
    }

    if (password.trim().length < 6) {
      passwordErr.passwordShort = "Password is too short!";
      isValid = false;
    }

    if (password.trim().length > 12) {
      passwordErr.passwordLong = "Password is too long!";
      isValid = false;
    }

    setEmailErr(emailErr);
    setPasswordErr(passwordErr);
    return isValid;
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <header>
        <div className="header-div cbp-af-header clearfix">
          <div className="inner-top-header-div clearfix">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-lg-12">
                  <div className="logo-div">
                    <a className="logo_link clearfix" href="index.html">
                      <img src={Logo} className="logo-white" alt="I-mobile" />
                    </a>
                  </div>
                  <nav>
                    <div className="top-nav1">
                      <div className="cd-shadow-layer"></div>
                      <div className="nav-m-bar">
                        <a
                          href="#"
                          onclick="openNav()"
                          className="opennav"
                          data-placement="bottom"
                          title=""
                          data-original-title="Menu"
                        >
                          <i className="menu-bars"></i>
                        </a>
                      </div>
                      <div className="fest-icon-bar">
                        <a href="comedy-festival.html">
                          <img src={Theater} alt="search" />
                          <span> Comedy festivals</span>
                        </a>
                      </div>
                      <div className="nav-div clearfix" id="mySidenav">
                        <a
                          href="javascript:void(0)"
                          className="closebtn"
                          onclick="closeNav()"
                        >
                          &times;
                        </a>

                        <ul className="nav ullist-inline " id="nav-res">
                          <li>
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal-conatct"
                            >
                              Contact us
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#login-post-mic"
                              onClick={handleShow}
                            >
                              Login
                            </a>
                          </li>
                          <li className="btn-signup">
                            <a href="guide-for-post-mic.html">Post Your Mic</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="modal fade modal-custom modal-login" role="dialog">
        <div className="modal-dialog modal-dialog-1000">
          <Modal
            show={show}
            onHide={handleClose}
            className="modal-custom modal-login"
            role="dialog"
          >
            <div className="modal-header">
              <h4 className=""></h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={handleClose}
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-logo">
                <a href="#">
                  <img src={LogoBlack} alt="logo" />
                </a>
              </div>
              <div className="modal-heading dotted-gradient">
                <h3>Login and Post your mic...</h3>
              </div>
              <div className="login-form">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="account-text">
                      <p>
                        You need an account to edit, manage, and eventually
                        delete your mic when the venue goes out of business.
                      </p>
                      <p>
                        If you not have an account.{" "}
                        <a href="#">Please register and create an account.</a>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="has-float-label">
                        <input
                          className="form-control"
                          type="text"
                          value={email}
                          placeholder="Email Address"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                        <span>Email Address</span>
                      </label>
                      {Object.keys(emailErr).map((key) => {
                        return (
                          <span style={{ color: "red" }}>{emailErr[key]}</span>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="has-float-label">
                        <input
                          className="form-control"
                          id="password-field"
                          type="password"
                          value={password}
                          placeholder="Password"
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                        <span>Password</span>
                      </label>
                      {Object.keys(passwordErr).map((key) => {
                        return (
                          <span style={{ color: "red" }}>
                            {passwordErr[key]}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <label className="container-check">
                      Keep me signed in
                      <input type="checkbox" checked="checked" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="col-lg-6 text-right">
                    <div className="forgot-password-link">
                      <a href="">Forgot password</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="login-form-footer">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="skip-arrow">
                      <a href="sign-up.html">
                        Skip and register{" "}
                        <span>
                          <i className="material-icons">arrow_right_alt</i>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 text-right">
                    <div className="btn-groups">
                      <a href="#" class="btn">
                        Not Now
                      </a>
                      <a href="#" className="btn btn-login" onClick={onSubmit}>
                        Login Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
