import React from "react";
import { useHistory } from "react-router-dom";
import DashboardHeader from "../DashboardHeader";
import Footer from "../Footer";
import Instructions from "./Instructions";

function StepSix() {
  const history = useHistory();
  const handlePreviousClick = (e) => {
    e.preventDefault();
    history.push("/post/5");
  };

  const handlePublishClick = (e) => {
    e.preventDefault();
    history.push("/");
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
                          <h4>Step 6 of 6</h4>
                          <p>Review Your Mic Details </p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3">
                        <div className="review-details">
                          <h4>Uploaded Poster</h4>
                          <img src="images/Mic.png" alt="" />
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-9">
                        <ul className="post-review">
                          <li>
                            <span>Name of Mic:</span>Comedy open mic
                          </li>
                          <li>
                            <span>Address:</span>6649 N Blue Gum St New Orleans
                            Orleans - 70116
                          </li>
                          <li>
                            <span>City:</span>Orleans
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 text-right">
                        <button className="btn btn-draft">Save in draft</button>
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
                            onClick={handlePublishClick}
                          >
                            Publish
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

export default StepSix;
