import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { stepFour } from "../../redux";
import Select from "react-select";
import DashboardHeader from "../DashboardHeader";
import Footer from "../Footer";
import Instructions from "./Instructions";

const options = [{ value: "Completly Free", label: "Completly Free" }];

function StepFour(props) {
  const history = useHistory();
  const [cost, setCost] = useState("");

  const handlePreviousClick = (e) => {
    e.preventDefault();
    history.push("/post/3");
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    props.stepFour({
      cost: cost,
    });
    history.push("/post/5");
  };

  useEffect(() => {
    setCost(props.cost);
  }, [props.cost]);

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
                              <Select
                                className="select-multiple"
                                options={options}
                                // value={cost}
                                // onChange={(e) => {
                                //   setCost(e.target.value);
                                // }}
                                onClick={() => {
                                  setCost("Completly Free");
                                }}
                              />
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

const mapStateToProps = (state) => {
  return {
    cost: state.four.cost,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    stepFour: (data) => dispatch(stepFour(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StepFour);
