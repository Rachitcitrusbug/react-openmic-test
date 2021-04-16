import React from "react";
import LogoBlack from "../assets/images/logo-black.svg";
import Place1 from "../assets/images/places/1.jpg";
import Place2 from "../assets/images/places/2.jpg";
import Place3 from "../assets/images/places/3.jpg";
import Place4 from "../assets/images/places/4.jpg";
import Place5 from "../assets/images/places/5.jpg";
import Place6 from "../assets/images/places/6.jpg";
import Place7 from "../assets/images/places/7.jpg";
import Place8 from "../assets/images/places/8.jpg";
import Place9 from "../assets/images/places/9.jpg";
import Place10 from "../assets/images/places/10.jpg";
import Place11 from "../assets/images/places/11.jpg";

function ChangeRegionModal() {
  return (
    <>
      <div id="change-region" className="modal fade modal-custom" role="dialog">
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
                <h3>Register and Post your mic...</h3>
              </div>

              <div className="row">
                <div className="col-lg-4 col-md-4 col-6">
                  <a href="#" className="modal-post">
                    <div className="postbox">
                      <img src={Place1} alt="" />
                      <h2>Manhattan</h2>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-6">
                  <a href="#" className="modal-post">
                    <div className="postbox">
                      <img src={Place2} alt="" />
                      <h2>Brooklyn</h2>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-6">
                  <a href="#" className="modal-post">
                    <div className="postbox">
                      <img src={Place3} alt="" />
                      <h2>Queens</h2>
                    </div>
                  </a>
                </div>

                <div className="col-lg-4 col-md-4  col-6">
                  <a href="#" className="modal-post">
                    <div className="postbox">
                      <img src={Place4} alt="" />
                      <h2>Staten Island</h2>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-md-4  col-6">
                  <a href="#" className="modal-post">
                    <div className="postbox">
                      <img src={Place5} alt="" />
                      <h2>Bronx</h2>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-md-4  col-6">
                  <a href="#" className="modal-post">
                    <div className="postbox">
                      <img src={Place6} alt="" />
                      <h2>Suburbs</h2>
                    </div>
                  </a>
                </div>

                <div className="col-lg-4 col-md-4  col-6">
                  <a href="#" className="modal-post">
                    <div className="postbox">
                      <img src={Place7} alt="" />
                      <h2>Long Island</h2>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-md-4  col-6">
                  <a href="#" className="modal-post">
                    <div className="postbox">
                      <img src={Place8} alt="" />
                      <h2>New Jersey</h2>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-md-4  col-6">
                  <a href="#" className="modal-post">
                    <div className="postbox">
                      <img src={Place9} alt="" />
                      <h2>Philadelphia</h2>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-md-4  col-6">
                  <a href="#" className="modal-post">
                    <div className="postbox">
                      <img src={Place10} alt="" />
                      <h2>DC</h2>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-md-4  col-6">
                  <a href="#" className="modal-post">
                    <div className="postbox">
                      <img src={Place11} alt="" />
                      <h2>Baltimore</h2>
                    </div>
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

export default ChangeRegionModal;
