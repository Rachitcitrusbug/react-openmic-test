import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LoginModal from "./Modal/LoginModal";
import ContactModal from "./Modal/ContactModal";
import Logo from "../assets/images/logo.svg";
import Theater from "../assets/images/icon/theater.svg";
import "../assets/css/steps/style.css";
import "../assets/css/animate.min.css";
import "../assets/css/bootstrap-float-label.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/custom.css";
// import "../assets/css/datetimepicker.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/main-style.css";
// import "../assets/css/owl.carousel.min.css";
import "../assets/css/owl.theme.default.css";
import "../assets/css/owl.theme.default.min.css";
import "../assets/css/select2.min.css";
//import "../assets/css/taggle.min.css";

function DashboardHeader() {
  const [loginShow, setLoginShow] = useState(false);
  const [contactShow, setContactShow] = useState(false);

  const handleLoginShow = () => setLoginShow(true);
  const handleLoginClose = () => setLoginShow(false);

  const handleContactShow = () => setContactShow(true);
  const handleContactClose = () => setContactShow(false);

  const element1 = document.querySelector("#mySidenav");
  const element2 = document.querySelector("#nav-res");
  const element3 = document.querySelector(".cd-shadow-layer");

  const handleOpenNav = () => {
    if (element1 && element2 && element3) {
      element1.classList.add("width80");
      element2.classList.add("opacityon");
      element3.classList.add("displayblock");
    }
  };

  const handleCloseNav = () => {
    if (element1 && element2 && element3) {
      element1.classList.remove("width80");
      element2.classList.remove("opacityon");
      element3.classList.remove("displayblock");
    }
  };

  const history = useHistory();

  const handleImageClick = (e) => {
    e.preventDefault();
    history.push("/");
  };

  const handlePostClick = (e) => {
    e.preventDefault();
    history.push("/post");
  };

  return (
    <>
      <header>
        <div className="header-div cbp-af-header clearfix">
          <div className="inner-top-header-div clearfix">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-lg-12">
                  <div className="logo-div">
                    <a
                      className="logo_link clearfix"
                      href="#"
                      onClick={handleImageClick}
                    >
                      <img src={Logo} className="logo-white" alt="I-mobile" />
                    </a>
                  </div>
                  <nav>
                    <div className="top-nav1">
                      <div className="cd-shadow-layer"></div>
                      <div className="nav-m-bar">
                        <a
                          href="#"
                          onClick={handleOpenNav}
                          className="opennav"
                          data-placement="bottom"
                          title=""
                          data-original-title="Menu"
                        >
                          <i className="menu-bars"></i>
                        </a>
                      </div>
                      <div className="fest-icon-bar">
                        <a href="comedy-festival.html">
                          <img src={Theater} alt="search" />
                          <span> Comedy festivals</span>
                        </a>
                      </div>
                      <div className="nav-div clearfix" id="mySidenav">
                        <a
                          href="javascript:void(0)"
                          className="closebtn"
                          onClick={handleCloseNav}
                        >
                          &times;
                        </a>

                        <ul className="nav ullist-inline " id="nav-res">
                          <li>
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal-conatct"
                              onClick={handleContactShow}
                            >
                              Contact us
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#login-post-mic"
                              onClick={handleLoginShow}
                            >
                              Login
                            </a>
                          </li>
                          <li className="btn-signup">
                            <a href="#" onClick={handlePostClick}>
                              Post Your Mic
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <LoginModal show={loginShow} onHide={handleLoginClose} />

      <ContactModal show={contactShow} onHide={handleContactClose} />
    </>
  );
}

export default DashboardHeader;
