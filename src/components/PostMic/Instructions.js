import React, { useState } from "react";
import LoginModal from "../Modal/LoginModal";

function Instructions() {
  const [loginShow, setLoginShow] = useState(false);

  const handleLoginShow = () => setLoginShow(true);
  const handleLoginClose = () => setLoginShow(false);
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="post-mic-heading">
            <h3>Post your mic...</h3>

            <p>
              First, you need to open a free account so can you post, edit and
              manage the details of your Open Mic. If you have already signed-up{" "}
              <a
                href="#!"
                data-toggle="modal"
                data-target="#login-post-mic"
                className="login-txt"
                onClick={handleLoginShow}
              >
                LOGIN
              </a>
            </p>
          </div>
        </div>
      </div>
      <LoginModal show={loginShow} onHide={handleLoginClose} />
    </>
  );
}

export default Instructions;
