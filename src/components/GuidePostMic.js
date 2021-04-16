import React from "react";
import DashboardHeader from "./DashboardHeader";
import Footer from "./Footer";

function GuidePostMic() {
  return (
    <>
      <div className="wrapper">
        <DashboardHeader />
        <div class="middle-container">
          <section class="postmic-secttion">
            <div class="container">
              <div class="post-mic-form">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="post-mic-heading">
                      <h3>Post your mic...</h3>
                      <p>Guide for Posting Your Open Mic</p>
                      <ul class="post-guide">
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

                <div class="login-form-footer">
                  <div class="row">
                    <div class="col-lg-12 text-right">
                      <div class="btn-groups">
                        <a href="post-your-mic.html" class="btn btn-login">
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
