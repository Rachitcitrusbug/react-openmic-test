import React from "react";
import { useHistory } from "react-router-dom";
import DashboardHeader from "../DashboardHeader";
import Footer from "../Footer";
import Instructions from "./Instructions";

function StepTwo() {
  const history = useHistory();
  const handlePreviousClick = (e) => {
    e.preventDefault();
    history.push("/post/1");
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    history.push("/post/3");
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
                      <div className="col-lg-12">
                        <div className="step-title">
                          <h4>Step 2 of 6</h4>
                          <p>When does this mic happen? </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label className="has-float-label">
                            <input
                              type="text"
                              id="datetime"
                              className="form-control"
                              placeholder="select date"
                            />
                            <span>Schedule Date and Time</span>
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

export default StepTwo;
