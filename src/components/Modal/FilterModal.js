import React from "react";

function FilterModal() {
  return (
    <>
      <div id="modal-filter" className="modal fade modal-custom" role="dialog">
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className=""></h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="col-lg-6 col-md-12">
                <div className="form-group">
                  <span className="has-float-label">
                    <div className="select2-div">
                      <select className="select-multiple">
                        <option>No Drink Minimum</option>
                        <option>Drink Minimum</option>
                      </select>
                    </div>
                    <label for="second">Select Mic Type</label>
                  </span>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 ">
                <div className="form-group">
                  <span className="has-float-label">
                    <div className="select2-div">
                      <select className="select-multiple">
                        <option>All Mic</option>
                        <option>Featured</option>
                      </select>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterModal;
