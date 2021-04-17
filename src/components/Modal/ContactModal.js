import React from "react";
import { Modal } from "react-bootstrap";
import Select from "react-select";
import LogoBlack from "../../assets/images/logo-black.svg";

function ContactModal(props) {
  const options = [
    { value: "I can’t acces my account", label: "I can’t acces my account" },
    {
      value: "I can't link my phone number",
      label: "I can't link my phone number",
    },
  ];

  return (
    <>
      <Modal
        id="modal-conatct"
        className="modal fade modal-custom  modal-contact"
        role="dialog"
        show={props.show}
        onHide={props.onHide}
      >
        <div className="modal-header">
          <h4 className=""></h4>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            onClick={props.onHide}
          >
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
                      <Select className="select-multiple" options={options} />
                    </div>
                    <label for="second">Select option to contact</label>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ContactModal;
