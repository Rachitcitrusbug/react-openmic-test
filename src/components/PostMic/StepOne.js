import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import DashboardHeader from "../DashboardHeader";
import Footer from "../Footer";
import Instructions from "./Instructions";
import { stepOne } from "../../redux";

function StepOne(props) {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [cellNumber, setCellNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [venue, setVenue] = useState("");
  const [aboutShow, setAboutShow] = useState("");

  const handleNextClick = (e) => {
    e.preventDefault();
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      cellNumber: cellNumber,
      password: password,
      confirmPassword: confirmPassword,
      venue: venue,
      aboutShow: aboutShow,
    };
    props.stepOne(data);
    history.push("/post/2");
  };

  useEffect(() => {
    setFirstName(props.firstName);
    setLastName(props.lastName);
    setEmail(props.email);
    setCellNumber(props.cellNumber);
    setPassword(props.password);
    setConfirmPassword(props.confirmPassword);
    setVenue(props.venue);
    setAboutShow(props.aboutShow);
  }, [
    props.firstName,
    props.lastName,
    props.email,
    props.cellNumber,
    props.password,
    props.confirmPassword,
    props.venue,
    props.aboutShow,
  ]);

  return (
    <>
      <div classNameName="wrapper">
        <DashboardHeader />
        <div className="middle-container">
          <section className="postmic-secttion main">
            <div className="container">
              <div className="post-mic-form post-mic-form-steps">
                <Instructions />

                <form
                  method="POST"
                  id="signup-form"
                  className="signup-form"
                  enctype="multipart/form-data"
                >
                  <h3></h3>
                  <fieldset>
                    <div className="row mt20">
                      <div className="col-lg-12">
                        <div className="step-title">
                          <h4>Step 1 of 6</h4>
                          <p>Account Details </p>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="has-float-label">
                            <input
                              type="text"
                              className="form-control"
                              name="first_name"
                              id="first_name"
                              placeholder="First Name"
                              value={firstName}
                              onChange={(e) => {
                                setFirstName(e.target.value);
                              }}
                            />
                            <span className="">First Name </span>
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="has-float-label">
                            <input
                              type="text"
                              className="form-control"
                              name="last_name"
                              id="last_name"
                              placeholder="Last Name"
                              value={lastName}
                              onChange={(e) => {
                                setLastName(e.target.value);
                              }}
                            />
                            <span className="">Last Name </span>
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="has-float-label">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              id="email"
                              placeholder="Email"
                              value={email}
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                            />
                            <span className="">Email </span>
                          </label>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="has-float-label">
                            <input
                              type="Number"
                              className="form-control"
                              name="Cell"
                              id="Cell"
                              placeholder="Cell Number"
                              value={cellNumber}
                              onChange={(e) => {
                                setCellNumber(e.target.value);
                              }}
                            />
                            <span className="">Cell Number </span>
                          </label>
                          <span className="note">
                            will not post on this site unless you request us to
                            do so.
                          </span>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="has-float-label">
                            <input
                              type="password"
                              className="form-control"
                              name="password"
                              id="password"
                              placeholder="password"
                              value={password}
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                            />
                            <span className="">Password </span>
                          </label>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="has-float-label">
                            <input
                              type="password"
                              className="form-control"
                              name="password"
                              id="password"
                              placeholder="Confirm password"
                              value={confirmPassword}
                              onChange={(e) => {
                                setConfirmPassword(e.target.value);
                              }}
                            />
                            <span className="">Confirm password </span>
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label className="has-float-label">
                            <input
                              type="Text"
                              className="form-control"
                              name="Venue"
                              id="Venue"
                              placeholder="Venue"
                              value={venue}
                              onChange={(e) => {
                                setVenue(e.target.value);
                              }}
                            />
                            <span className="">Venue</span>
                          </label>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <label className="has-float-label">
                            <textarea
                              className="form-control text-area"
                              rows="4"
                              name="about"
                              id="about"
                              placeholder="About show"
                              value={aboutShow}
                              onChange={(e) => {
                                setAboutShow(e.target.value);
                              }}
                            ></textarea>
                            <span>About show</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <div className="login-form-footer">
                    <div className="row">
                      <div className="col-lg-12 text-right">
                        <div className="btn-groups">
                          <a
                            href="#"
                            className="btn btn-login"
                            onClick={handleNextClick}
                          >
                            Next
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    firstName: state.firstName,
    lastName: state.lastName,
    email: state.email,
    cellNumber: state.cellNumber,
    password: state.password,
    confirmPassword: state.confirmPassword,
    venue: state.venue,
    aboutShow: state.aboutShow,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    stepOne: (data) => dispatch(stepOne(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StepOne);
