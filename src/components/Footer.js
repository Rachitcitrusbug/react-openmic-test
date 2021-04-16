import React from "react";
import "../assets/css/steps/style.css";
import "../assets/css/animate.min.css";
import "../assets/css/bootstrap-float-label.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/custom.css";
//import "../assets/css/datetimepicker.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/main-style.css";
//import "../assets/css/owl.carousel.min.css";
import "../assets/css/owl.theme.default.css";
import "../assets/css/owl.theme.default.min.css";
import "../assets/css/select2.min.css";
//import "../assets/css/taggle.min.css";

function Footer() {
  return (
    <div>
      <footer>
        <section className="copyright-section ">
          <div className="container">
            <div className="div-Copyright">
              <div className="row">
                <div className="col-lg-9 col-md-9 col-sm-6">
                  <div className="social-media">
                    <ul className="social-media-icon">
                      <li>
                        <a href="#" className="icon-g-pluse">
                          <i className="fa fa-google-plus "></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="icon-facebook">
                          <i className="fa fa-facebook-official "></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="icon-twitter">
                          <i className="fa fa-twitter "></i>
                        </a>
                      </li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque aliquet lacus turpis, vitae accumsan odio lobortis
                      venenatis.
                    </p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="Copyright">
                    <p>© 2019 openmiclist.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
