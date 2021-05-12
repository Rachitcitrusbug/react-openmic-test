import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { stepFive } from "../../redux";
import DashboardHeader from "../DashboardHeader";
import Footer from "../Footer";
import Instructions from "./Instructions";
import MicImage from "../../assets/images/Mic.png";

function StepFive(props) {
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const history = useHistory();
  const handlePreviousClick = (e) => {
    e.preventDefault();
    history.push("/post/4");
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    props.stepFive({
      image: image,
      description: description,
    });
    history.push("/post/6");
  };

  useEffect(() => {
    setImage(props.image);
    setDescription(props.description);
  }, [props.image, props.description]);

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
                          <h4>Step 5 of 6</h4>
                          <p>Upload image and additional information</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="form-file">
                          <input
                            type="file"
                            className="inputfile"
                            name="your_picture"
                            id="your_picture"
                            onchange="readURL(this);"
                            data-multiple-caption="{count} files selected"
                            multiple
                            // value={image}
                            onChange={(e) => {
                              setImage(e.target.value);
                            }}
                          />
                          <label for="your_picture">
                            <figure>
                              <img
                                src={MicImage}
                                alt=""
                                className="your_picture_image"
                              />
                            </figure>
                            <span className="file-button">Upload Poster</span>
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-10  col-md-9 col-sm-6">
                        <div className="form-group">
                          <label className="has-float-label">
                            <textarea
                              className="form-control text-area mt-0"
                              rows="4"
                              name="Description"
                              id="Description"
                              placeholder="Additional description"
                              value={description}
                              onChange={(e) => {
                                setDescription(e.target.value);
                              }}
                            ></textarea>
                            <span>Additional description</span>
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

const mapStateToProps = (state) => {
  return {
    image: state.five.image,
    description: state.five.description,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    stepFive: (data) => dispatch(stepFive(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StepFive);
