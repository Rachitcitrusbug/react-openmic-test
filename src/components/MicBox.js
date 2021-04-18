import React from "react";

function MicBox(props) {
  return (
    <>
      <div className=" grid-list col-lg-3 col-md-6 col-sm-6">
        <div className="grid-box">
          {props.micBoxData.isFeatured && (
            <span className="featured-label">Featured</span>
          )}
          <a href="post-mic-details.html">
            <div className="img-box">
              <img src={props.micBoxData.image} alt="product-1" />
            </div>
            <div className="content-box">
              <h3>{props.micBoxData.title}</h3>
              <p>
                <i className="material-icons"> access_time </i>
                {props.micBoxData.time}
              </p>
              <p>
                <i className="material-icons"> location_on</i>
                {props.micBoxData.location}
              </p>
              <p>First come first serves</p>
              <p className="address">{props.micBoxData.address}</p>
            </div>
            <div className="content-box2">
              <h4>About the Mic</h4>
              <p>{props.micBoxData.description}</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default MicBox;
