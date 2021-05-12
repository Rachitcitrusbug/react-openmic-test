import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { PostMic } from "../../api/postMicApi";
import DashboardHeader from "../DashboardHeader";
import Footer from "../Footer";
import Instructions from "./Instructions";

function StepSix(props) {
  const firstName = useSelector((state) => state.one.firstName);
  const lastName = useSelector((state) => state.one.lastName);
  const email = useSelector((state) => state.one.email);
  const cellNumber = useSelector((state) => state.one.cellNumber);
  const password = useSelector((state) => state.one.password);
  const confirmPassword = useSelector((state) => state.one.confirmPassword);
  const venue = useSelector((state) => state.one.venue);
  const aboutShow = useSelector((state) => state.one.aboutShow);
  const scheduleDateTime = useSelector((state) => state.two.scheduleDateTime);
  const openForAll = useSelector((state) => state.three.openForAll);
  const description = useSelector((state) => state.three.description);
  const cost = useSelector((state) => state.four.cost);
  const image = useSelector((state) => state.five.image);
  const description2 = useSelector((state) => state.five.description);

  const history = useHistory();
  const handlePreviousClick = (e) => {
    e.preventDefault();
    history.push("/post/5");
  };

  const handlePublishClick = (e) => {
    e.preventDefault();
    const micData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      cellNumber: cellNumber,
      password: password,
      confirmPassword: confirmPassword,
      venue: venue,
      aboutShow: aboutShow,
      scheduleDateTime: scheduleDateTime,
      openForAll: openForAll,
      description: description,
      cost: cost,
      image: image,
    };

    try {
      PostMic(micData).then((result) => {
        if (result) {
          switch (result.code) {
            case 200:
              if (result.status === "OK") {
                console.log("Mic posted successfully.");
              } else {
                history.push("/");
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
                          <img src={image} alt="" />
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-9">
                        <ul className="post-review">
                          <li>
                            <span>Name of Mic:</span>
                            {firstName}
                          </li>
                          <li>
                            <span>Address:</span>
                            {venue}
                          </li>
                          <li>
                            <span>City:</span>
                            {aboutShow}
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
