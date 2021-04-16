import React from "react";
import Footer from "./Footer";
import GridImage1 from "../assets/images/grid-images/img-1.svg";
import GridImage2 from "../assets/images/grid-images/img-2.svg";
import GridImage3 from "../assets/images/grid-images/img-3.svg";
import GridImage4 from "../assets/images/grid-images/img-4.svg";
import AddBottom from "../assets/images/add/add-bottom.png";
import AddTwo from "../assets/images/add/add-two.png";
import "../assets/css/steps/style.css";
import "../assets/css/animate.min.css";
import "../assets/css/bootstrap-float-label.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/custom.css";
// import "../assets/css/datetimepicker.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/main-style.css";
//import "../assets/css/owl.carousel.min.css";
import "../assets/css/owl.theme.default.css";
import "../assets/css/owl.theme.default.min.css";
import "../assets/css/select2.min.css";
import MicBox from "./MicBox";
import AdBanner from "./AdBanner";
//import "../assets/css/taggle.min.css";

const elements = document.getElementsByClassName("grid-list");
var i;
const handleListClick = () => {
  for (i = 0; i < elements.length; i++) {
    // elements[i].style.width = "100%";
    elements[i].classList.add("grid-list");
    elements[i].classList.add("col-lg-3");
    elements[i].classList.add("col-md-6");
    elements[i].classList.add("col-sm-6");
    elements[i].classList.remove("list-view");
    elements[i].classList.remove("col-md-12");
    elements[i].classList.remove("col-lg-12");
  }
};

const handleGridClick = () => {
  for (i = 0; i < elements.length; i++) {
    // elements[i].style.width = "50%";
    elements[i].classList.add("grid-list");
    elements[i].classList.add("col-lg-3");
    elements[i].classList.add("col-md-12");
    elements[i].classList.add("col-sm-6");
    elements[i].classList.add("col-lg-12");
    elements[i].classList.add("list-view");
  }
};

function PageContent() {
  return (
    <>
      <div className="middle-container">
        <section className="banner-section"></section>

        <section className="quick-search">
          <div className="quick-search-div">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-6">
                  <span className="has-float-label readyonly">
                    <input
                      type="button"
                      className="btn btn-modal"
                      value="Manhattan"
                      data-toggle="modal"
                      data-target="#change-region"
                    />
                    <label for="first">Change Region</label>
                  </span>
                </div>
                <div className="col-lg-3 col-md-3 col-6 mobile-view ">
                  <a
                    href=""
                    className="btn btn-modal btn-filter"
                    value="Manhattan"
                    data-toggle="modal"
                    data-target="#moadl-filter"
                  >
                    Apply Filter <i className="material-icons"> filter_list </i>
                  </a>
                </div>

                <div className="col-lg-3 col-md-3 destop-view">
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
                <div className="col-lg-3 col-md-3 destop-view">
                  <span className="has-float-label">
                    <div className="select2-div">
                      <select className="select-multiple">
                        <option>All Mic</option>
                        <option>Featured mic</option>
                      </select>
                    </div>
                    <label for="third">Sort By</label>
                  </span>
                </div>
                <div className="col-lg-3 col-md-3 destop-view">
                  <div className="form-group search-bar">
                    <input
                      type="text"
                      className="form-control search"
                      placeholder="Quick Search"
                    />
                    <i className="fa fa-search icon"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid-section">
          <div className="grid-div-header">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="days">
                    <div className="weekend">
                      <ul className="nav nav-tabs">
                        <li className="active">
                          <a data-toggle="tab" href="#saturday">
                            Saturday
                          </a>
                        </li>
                        <li>
                          <a data-toggle="tab" href="#sunday">
                            Sunday
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="other-days" id="other-days">
                      <ul className="nav nav-tabs">
                        <li>
                          <a data-toggle="tab" href="#monday">
                            Monday
                          </a>
                        </li>
                        <li>
                          <a data-toggle="tab" href="#sunday">
                            Tuesday
                          </a>
                        </li>
                        <li>
                          <a data-toggle="tab" href="#sunday">
                            Thursday
                          </a>
                        </li>
                        <li>
                          <a data-toggle="tab" href="#sunday">
                            Friday
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="btn-group ">
                    <div className="btn-view-othersday">
                      <a id="toggle-view" className="btn btn-primary btn-blue">
                        View Other week days
                      </a>
                    </div>
                    <div className="btn-icons" id="btn-icons">
                      <a
                        className="btn-view listView active"
                        onClick={handleListClick}
                      >
                        <i className="material-icons">view_module</i>
                      </a>
                      <a
                        className="btn-view gridView"
                        onClick={handleGridClick}
                      >
                        <i className="material-icons">view_list</i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="grid-div-result">
                    <div className="tab-content">
                      <div id="saturday" className="tab-pane active">
                        <div className="grid-layout">
                          <div className="row">
                            <MicBox image={GridImage1} isFeatured={true} />
                            <MicBox image={GridImage2} isFeatured={true} />
                            <MicBox image={GridImage3} isFeatured={true} />
                            <MicBox image={GridImage4} isFeatured={true} />
                          </div>

                          <div className="row">
                            <MicBox image={GridImage1} />
                            <MicBox image={GridImage2} />
                            <MicBox image={GridImage3} />
                            <MicBox image={GridImage4} />
                          </div>

                          <div className="row">
                            <MicBox image={GridImage1} />
                            <MicBox image={GridImage2} />
                            <MicBox image={GridImage3} />
                            <MicBox image={GridImage4} />
                          </div>

                          <div className="row">
                            <MicBox image={GridImage1} />
                            <MicBox image={GridImage2} />
                            <AdBanner
                              imageTop={AddTwo}
                              imageBottom={AddBottom}
                            />
                          </div>
                        </div>
                      </div>
                      <div id="sunday" className="tab-pane ">
                        <div className="list-layout">
                          <div className="row">
                            <MicBox image={GridImage1} />
                            <MicBox image={GridImage2} />
                            <MicBox image={GridImage3} />
                            <MicBox image={GridImage4} />
                          </div>

                          <div className="row">
                            <MicBox image={GridImage1} />
                            <MicBox image={GridImage2} />
                            <AdBanner
                              imageTop={AddTwo}
                              imageBottom={AddBottom}
                            />
                          </div>
                        </div>
                      </div>

                      <div id="monday" className="tab-pane">
                        <div className="list-layout">
                          <div className="row">
                            <MicBox image={GridImage1} />
                            <MicBox image={GridImage2} />
                            <MicBox image={GridImage3} />
                            <MicBox image={GridImage4} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default PageContent;
