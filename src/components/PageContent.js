import React, { useState } from "react";
import Select from "react-select";
import MicBox from "./MicBox";
import AdBanner from "./AdBanner";
import Footer from "./Footer";
import ChangeRegionModal from "./Modal/ChangeRegionModal";
import { micBoxData } from "../data/MicBoxData";
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
//import "../assets/css/taggle.min.css";

const elements = document.getElementsByClassName("grid-list");
var i;
const handleListClick = () => {
  for (i = 0; i < elements.length; i++) {
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
    elements[i].classList.add("grid-list");
    elements[i].classList.add("col-lg-3");
    elements[i].classList.add("col-md-12");
    elements[i].classList.add("col-sm-6");
    elements[i].classList.add("col-lg-12");
    elements[i].classList.add("list-view");
  }
};

const optionsMicType = [
  { value: "No Drink Minimum", label: "No Drink Minimum" },
  { value: "Drink Minimum", label: "Drink Minimum" },
];

const optionsSortBy = [
  { value: "All Mic", label: "All Mic" },
  { value: "Featured Mic", label: "Featured Mic" },
];

function PageContent() {
  const [regionShow, setRegionShow] = useState(false);

  const handleRegionShow = () => setRegionShow(true);
  const handleRegionClose = () => setRegionShow(false);
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
                      onClick={handleRegionShow}
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
                      <Select
                        className="select-multiple"
                        options={optionsMicType}
                      />
                    </div>
                    <label for="second">Select Mic Type</label>
                  </span>
                </div>
                <div className="col-lg-3 col-md-3 destop-view">
                  <span className="has-float-label">
                    <div className="select2-div">
                      <Select
                        className="select-multiple"
                        options={optionsSortBy}
                      />
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
                            <MicBox micBoxData={micBoxData[0]} />
                            <MicBox micBoxData={micBoxData[1]} />
                            <MicBox micBoxData={micBoxData[2]} />
                            <MicBox micBoxData={micBoxData[3]} />
                          </div>

                          <div className="row">
                            <MicBox micBoxData={micBoxData[4]} />
                            <MicBox micBoxData={micBoxData[5]} />
                            <MicBox micBoxData={micBoxData[6]} />
                            <MicBox micBoxData={micBoxData[7]} />
                          </div>

                          <div className="row">
                            <MicBox micBoxData={micBoxData[8]} />
                            <MicBox micBoxData={micBoxData[9]} />
                            <MicBox micBoxData={micBoxData[10]} />
                            <MicBox micBoxData={micBoxData[11]} />
                          </div>

                          <div className="row">
                            <MicBox micBoxData={micBoxData[12]} />
                            <MicBox micBoxData={micBoxData[13]} />
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
                            <MicBox micBoxData={micBoxData[0]} />
                            <MicBox micBoxData={micBoxData[1]} />
                            <MicBox micBoxData={micBoxData[2]} />
                            <MicBox micBoxData={micBoxData[3]} />
                          </div>

                          <div className="row">
                            <MicBox micBoxData={micBoxData[4]} />
                            <MicBox micBoxData={micBoxData[5]} />
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
                            <MicBox micBoxData={micBoxData[1]} />
                            <MicBox micBoxData={micBoxData[2]} />
                            <MicBox micBoxData={micBoxData[3]} />
                            <MicBox micBoxData={micBoxData[4]} />
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
      <ChangeRegionModal show={regionShow} onHide={handleRegionClose} />
    </>
  );
}

export default PageContent;
