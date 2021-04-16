import React from "react";
import LogoBlack from "../assets/images/logo-black.svg";

function ContactModal() {
  return (
    <>
      <div
        id="modal-conatct"
        className="modal fade modal-custom  modal-contact"
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
              <div className="modal-logo">
                <a href="#">
                  <img src={LogoBlack} alt="logo" />
                </a>
              </div>
              <div className="modal-heading dotted-gradient">
                <h3>Contact to openmiclist</h3>
              </div>
              <div className="Contact-form">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="contact-content">
                      <p>Choose a option and get the action</p>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <span className="has-float-label">
                        <div className="select2-div">
                          <select className="select-multiple">
                            <option>I can’t acces my account</option>
                            <option>I can't link my phone number</option>
                          </select>
                        </div>
                        <label for="second">Select option to contact</label>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactModal;
