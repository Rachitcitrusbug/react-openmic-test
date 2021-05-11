import React from "react";
import { useHistory } from "react-router-dom";
import DashboardHeader from "../DashboardHeader";
import Footer from "../Footer";
import Instructions from "./Instructions";

function StepThree() {
  const history = useHistory();
  const handlePreviousClick = (e) => {
    e.preventDefault();
    history.push("/post/2");
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    history.push("/post/4");
  };

  const styleObj = {
    display: "none",
  };

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
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="step-title">
                          <h4>Step 3 of 6</h4>
                          <p>Is this mic open to all Performance? </p>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="radio-check">
                          <label className="container-radio">
                            Yes
                            <input
                              type="radio"
                              className="radio-yes"
                              className="radio"
                              name="radio"
                            />
                            <span className="checkmark"></span>
                          </label>

                          <label className="container-radio">
                            No,{" "}
                            <span>
                              This mic is open only certian demographics.
                            </span>
                            <input
                              type="radio"
                              className="radio-no"
                              name="radio"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div
                          className="form-group radio-checked"
                          style={styleObj}
                        >
                          <label className="has-float-label">
                            <textarea
                              className="form-control text-area-100"
                              name="describe"
                              rows="4"
                              id="describe"
                              placeholder="please describe requirments to perform."
                            >
                              {" "}
                            </textarea>
                            <span className="">Describe requirments</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <div className="login-form-footer">
                    <div className="row">
                      <div className="col-lg-6 text-left">
                        <div className="btn-groups">
                          <a
                            href="#"
                            className="btn btn-login"
                            onClick={handlePreviousClick}
                          >
                            Previous
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 text-right">
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

export default StepThree;
