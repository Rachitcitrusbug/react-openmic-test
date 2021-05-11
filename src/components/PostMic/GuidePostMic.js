import React from "react";
import { useHistory } from "react-router-dom";
import DashboardHeader from "../DashboardHeader";
import Footer from "../Footer";

function GuidePostMic() {
  const history = useHistory();

  const handleAgreeClick = (e) => {
    e.preventDefault();
    history.push("/post/1");
  };

  return (
    <>
      <div className="wrapper">
        <DashboardHeader />
        <div className="middle-container">
          <section className="postmic-secttion">
            <div className="container">
              <div className="post-mic-form">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="post-mic-heading">
                      <h3>Post your mic...</h3>
                      <p>Guide for Posting Your Open Mic</p>
                      <ul className="post-guide">
                        <li>Your mic must permit Stand Up Comedy. </li>
                        <li>
                          You must not require performers to bring audience
                          members.
                        </li>
                        <li>
                          You must list all fees (including drink minimums) that
                          are required to perform.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="login-form-footer">
                  <div className="row">
                    <div className="col-lg-12 text-right">
                      <div className="btn-groups">
                        <a
                          href="#"
                          className="btn btn-login"
                          onClick={handleAgreeClick}
                        >
                          Agree
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default GuidePostMic;
