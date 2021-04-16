import React from "react";

function WelcomeModal() {
  return (
    <>
      <div
        id="login-welcome"
        className="modal fade modal-welcome"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-1000">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className=""></h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="welcome-content">
                <div className="welcome-heading">
                  <h2>Welcome</h2>
                </div>
                <p>
                  We’re thrilled to hear from you. Our inbox can’t wait to get
                  your messages, so talk to us any time you like.
                </p>
                <div className="dash-border"></div>
                <div className="social-media-pop-up">
                  <p>Follow us on</p>
                  <ul className="social-icons">
                    <li>
                      <a href="" className="g-pluse">
                        <i className="fa fa-google-plus" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="" className="facebook">
                        <i
                          className="fa fa-facebook-official"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a href="" className="twitter">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomeModal;
