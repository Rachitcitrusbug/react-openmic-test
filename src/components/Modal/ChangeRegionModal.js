import React from "react";
import { Modal } from "react-bootstrap";
import LogoBlack from "../../assets/images/logo-black.svg";

function ChangeRegionModal(props) {
  return (
    <>
      <Modal
        id="change-region"
        className="modal fade modal-custom"
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
            <h3>Register and Post your mic...</h3>
          </div>

          <div className="row">
            {props.regionData.map((region, index) => (
              <div key={index} className="col-lg-4 col-md-4 col-6">
                <a href="#" className="modal-post">
                  <div className="postbox">
                    <img src={region.image} alt="" />
                    <h2>{region.name}</h2>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ChangeRegionModal;
