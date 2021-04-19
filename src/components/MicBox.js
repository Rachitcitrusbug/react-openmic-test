import React from "react";

function MicBox(props) {
  return (
    <>
      <div className=" grid-list col-lg-3 col-md-6 col-sm-6">
        <div className="grid-box">
          {props.box.isFeatured && (
            <span className="featured-label">Featured</span>
          )}
          <a href="post-mic-details.html">
            <div className="img-box">
              <img src={props.box.image} alt="product-1" />
            </div>
            <div className="content-box">
              <h3>{props.box.title}</h3>
              <p>
                <i className="material-icons"> access_time </i>
                {props.box.time}
              </p>
              <p>
                <i className="material-icons"> location_on</i>
                {props.box.location}
              </p>
              <p>First come first serves</p>
              <p className="address">{props.box.address}</p>
            </div>
            <div className="content-box2">
              <h4>About the Mic</h4>
              <p>{props.box.description}</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default MicBox;
