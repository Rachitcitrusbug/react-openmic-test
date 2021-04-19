import React from "react";
import Select from "react-select";
import { Modal } from "react-bootstrap";

const optionsMicType = [
  { value: "No Drink Minimum", label: "No Drink Minimum" },
  { value: "Drink Minimum", label: "Drink Minimum" },
];

const optionsSortBy = [
  { value: "All Mic", label: "All Mic" },
  { value: "Featured Mic", label: "Featured Mic" },
];

function FilterModal(props) {
  return (
    <>
      <Modal
        id="modal-filter"
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
          <div className="col-lg-6 col-md-12">
            <div className="form-group">
              <span className="has-float-label">
                <div className="select2-div">
                  <Select
                    className="select-multiple"
                    options={optionsMicType}
                  />
                </div>
                <label for="second">Select Mic Type</label>
              </span>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 ">
            <div className="form-group">
              <span className="has-float-label">
                <div className="select2-div">
                  <Select className="select-multiple" options={optionsSortBy} />
                </div>
                <label for="third">Short By</label>
              </span>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 ">
            <div className="form-group search-bar">
              <input
                type="text"
                className="form-control search"
                placeholder="Quick Search"
              />
              <i className="fa fa-search icon"></i>
            </div>
          </div>
          <div className="col-lg-6 text-right">
            <div className="btn-groups">
              <a href="#" className="btn btn-login">
                Apply
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default FilterModal;
