import React from "react";
import { useHistory } from "react-router-dom";
import DashboardHeader from "../DashboardHeader";
import Footer from "../Footer";
import Instructions from "./Instructions";

function StepFour() {
  const history = useHistory();
  const handlePreviousClick = (e) => {
    e.preventDefault();
    history.push("/post/3");
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    history.push("/post/5");
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
                          <h4>Step 4 of 6</h4>
                          <p>Cost of Performance? </p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <span className="has-float-label">
                            <div className="select2-div">
                              <select className="select-multiple">
                                <option>Completly Free</option>
                              </select>
                            </div>
                            <label for="second">Select</label>
                          </span>
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

export default StepFour;
