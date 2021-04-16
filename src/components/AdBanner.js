import React from "react";

function AdBanner(props) {
  return (
    <>
      <div id="adds-banner" className="grid-list col-lg-6 col-md-6 col-sm-6">
        <div className="grid-box grid-bg-none">
          <div className="img-add add-one">
            <img src={props.imageTop} alt="add" />
          </div>
          <div className="img-add add-two">
            <img src={props.imageBottom} alt="add" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdBanner;
