import React from "react";

function MicBox(props) {
  return (
    <>
      <div className=" grid-list col-lg-3 col-md-6 col-sm-6">
        <div className="grid-box">
          {props.isFeatured && <span className="featured-label">Featured</span>}
          <a href="post-mic-details.html">
            <div className="img-box">
              <img src={props.image} alt="product-1" />
            </div>
            <div className="content-box">
              <h3>Comedy openmic</h3>
              <p>
                <i className="material-icons"> access_time </i>
                08:00 pm
              </p>
              <p>
                <i className="material-icons"> location_on</i>
                Brighton bar
              </p>
              <p>First come first serves</p>
              <p className="address">
                8 W Cerritos Ave #54, Bridgeport Gloucester, 856-264-4130
              </p>
            </div>
            <div className="content-box2">
              <h4>About the Mic</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas eleifend urna ligula…Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Maecenas eleifend urna ligula…
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default MicBox;
