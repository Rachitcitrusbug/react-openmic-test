import React from "react";
import LogoBlack from "../assets/images/logo-black.svg";

function LoginModal() {
  return (
    <>
      <div
        id="login-post-mic"
        className="modal fade modal-custom modal-login"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-1000">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className=""></h4>
              <button type="button" className="close" data-dismiss="modal">
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
                          placeholder="Email Address"
                        />
                        <span>Email Address</span>
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="has-float-label">
                        <input
                          className="form-control"
                          id="password-field"
                          type="password"
                          placeholder="Password"
                        />
                        <span>Password</span>
                      </label>
                      <span
                        toggle="#password-field"
                        className="fa fa-fw fa-eye field-icon toggle-password"
                      ></span>
                      <span className="error">Invalid password</span>
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
                      <a href="#" className="btn">
                        Not Now
                      </a>
                      <a href="#" className="btn btn-login">
                        Login Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginModal;
