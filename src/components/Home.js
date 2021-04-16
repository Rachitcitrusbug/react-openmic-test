import React from "react";
import Favicon from "../assets/images/favicon.png";
import Bootstrap from "../assets/css/bootstrap.min.css";
import BootstrapFloat from "../assets/css/bootstrap-float-label.min.css";
import Custom from "../assets/css/custom.css";
import Select2 from "../assets/css/select2.min.css";
import Animate from "../assets/css/animate.min.css";
import FontAwesome from "../assets/css/font-awesome.min.css";
import OwlCarousel from "../assets/css/owl.carousel.min.css";
import OwlTheme from "../assets/css/owl.theme.default.css";
import HTML5 from "../assets/js/html5.js";
import Logo from "../assets/images/logo.png";
import Comedy from "../assets/images/icon/theater.svg";
import GridImg1 from "../assets/images/grid-images/img-1.svg";
import GridImg2 from "../assets/images/grid-images/img-2.svg";
import GridImg3 from "../assets/images/grid-images/img-3.svg";
import GridImg4 from "../assets/images/grid-images/img-4.svg";

function Home() {
  return (
    <div>
      <html class="no-js" lang="en">
        <head>
          <meta name="description" content="" />
          <meta name="author" content="" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <title>Index | Open Mic List </title>
          <meta
            content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width"
            name="viewport"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link href={Favicon} rel="shortcut icon" />
          <link href={Bootstrap} media="all" rel="stylesheet" type="text/css" />
          <link
            href={BootstrapFloat}
            media="all"
            rel="stylesheet"
            type="text/css"
          />
          <link href={Custom} media="all" rel="stylesheet" type="text/css" />
          <link href={Select2} media="all" rel="stylesheet" type="text/css" />

          <link href={Animate} media="all" rel="stylesheet" type="text/css" />
          <link
            href="css/font-awesome.min.css"
            media="all"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href={OwlCarousel}
            media="all"
            rel="stylesheet"
            type="text/css"
          />
          <link href={OwlTheme} media="all" rel="stylesheet" type="text/css" />

          <script src={HTML5}></script>
        </head>
        <body>
          <div class="wrapper">
            <header>
              <div class="header-div cbp-af-header clearfix">
                <div class="inner-top-header-div clearfix">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-12 col-lg-12">
                        <div class="logo-div">
                          <a class="logo_link clearfix" href="index.html">
                            <img src={Logo} class="logo-white" alt="I-mobile" />
                          </a>
                        </div>
                        <nav>
                          <div class="top-nav1">
                            <div class="cd-shadow-layer"></div>
                            <div class="nav-m-bar">
                              <a
                                href="#"
                                onclick="openNav()"
                                class="opennav"
                                data-placement="bottom"
                                title=""
                                data-original-title="Menu"
                              >
                                <i class="menu-bars"></i>
                              </a>
                            </div>
                            <div class="fest-icon-bar">
                              <a href="comedy-festival.html">
                                <img src={Comedy} alt="search" />
                                <span> Comedy festivals</span>
                              </a>
                            </div>
                            <div class="nav-div clearfix" id="mySidenav">
                              <a
                                href="javascript:void(0)"
                                class="closebtn"
                                onclick="closeNav()"
                              >
                                &times;
                              </a>

                              <ul class="nav ullist-inline " id="nav-res">
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#modal-conatct"
                                  >
                                    Contact us
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#login-post-mic"
                                  >
                                    Login
                                  </a>
                                </li>
                                <li class="btn-signup">
                                  <a href="guide-for-post-mic.html">
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

            <div class="middle-container">
              <section class="banner-section"></section>

              <section class="quick-search">
                <div class="quick-search-div">
                  <div class="container">
                    <div class="row">
                      <div class="col-lg-3 col-md-3 col-6">
                        <span class="has-float-label readyonly">
                          <input
                            type="button"
                            class="btn btn-modal"
                            value="Manhattan"
                            data-toggle="modal"
                            data-target="#change-region"
                          />
                          <label for="first">Change Region</label>
                        </span>
                      </div>
                      <div class="col-lg-3 col-md-3 col-6 mobile-view ">
                        <a
                          href=""
                          class="btn btn-modal btn-filter"
                          value="Manhattan"
                          data-toggle="modal"
                          data-target="#moadl-filter"
                        >
                          Apply Filter{" "}
                          <i class="material-icons"> filter_list </i>
                        </a>
                      </div>

                      <div class="col-lg-3 col-md-3 destop-view">
                        <span class="has-float-label">
                          <div class="select2-div">
                            <select class="select-multiple">
                              <option>No Drink Minimum</option>
                              <option>Drink Minimum</option>
                            </select>
                          </div>
                          <label for="second">Select Mic Type</label>
                        </span>
                      </div>
                      <div class="col-lg-3 col-md-3 destop-view">
                        <span class="has-float-label">
                          <div class="select2-div">
                            <select class="select-multiple">
                              <option>All Mic</option>
                              <option>Featured mic</option>
                            </select>
                          </div>
                          <label for="third">Sort By</label>
                        </span>
                      </div>
                      <div class="col-lg-3 col-md-3 destop-view">
                        <div class="form-group search-bar">
                          <input
                            type="text"
                            class="form-control search"
                            placeholder="Quick Search"
                          />
                          <i class="fa fa-search icon"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section class="grid-section">
                <div class="grid-div-header">
                  <div class="container">
                    <div class="row">
                      <div class="col-lg-7">
                        <div class="days">
                          <div class="weekend">
                            <ul class="nav nav-tabs">
                              <li class="active">
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
                          <div class="other-days" id="other-days">
                            <ul class="nav nav-tabs">
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
                      <div class="col-lg-5">
                        <div class="btn-group ">
                          <div class="btn-view-othersday">
                            <a
                              id="toggle-view"
                              class="btn btn-primary btn-blue"
                            >
                              View Other week days
                            </a>
                          </div>
                          <div class="btn-icons" id="btn-icons">
                            <a
                              class="btn-view listView active"
                              onclick="listView()"
                            >
                              <i class="material-icons">view_module</i>
                            </a>
                            <a class="btn-view gridView" onclick="gridView()">
                              <i class="material-icons">view_list</i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="grid-div-result">
                          <div class="tab-content">
                            <div id="saturday" class="tab-pane active">
                              <div class="grid-layout">
                                <div class="row">
                                  <div class=" grid-list col-lg-3 col-md-6 col-sm-6">
                                    <div class="grid-box">
                                      <span class="featured-label">
                                        Featured
                                      </span>
                                      <a href="post-mic-details.html">
                                        <div class="img-box">
                                          <img src={GridImg1} alt="product-1" />
                                        </div>
                                        <div class="content-box">
                                          <h3>Comedy openmic</h3>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              access_time{" "}
                                            </i>
                                            08:00 pm
                                          </p>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              location_on{" "}
                                            </i>
                                            Brighton bar
                                          </p>
                                          <p>First come first serves</p>
                                          <p class="address">
                                            8 W Cerritos Ave #54, Bridgeport
                                            Gloucester, 856-264-4130
                                          </p>
                                        </div>
                                        <div class="content-box2">
                                          <h4>About the Mic</h4>
                                          <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Maecenas eleifend urna ligula…Lorem
                                            ipsum dolor sit amet, consectetur
                                            adipiscing elit. Maecenas eleifend
                                            urna ligula…
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>

                                  <div class="grid-list col-lg-3 col-md-6 col-sm-6">
                                    <div class="grid-box">
                                      <span class="featured-label">
                                        Featured
                                      </span>
                                      <a href="post-mic-details.html">
                                        <div class="img-box">
                                          <img src={GridImg2} alt="product-1" />
                                        </div>
                                        <div class="content-box">
                                          <h3>Comedy openmic</h3>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              access_time{" "}
                                            </i>
                                            08:00 pm
                                          </p>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              location_on{" "}
                                            </i>
                                            Brighton bar
                                          </p>
                                          <p>First come first serves</p>
                                          <p class="address">
                                            8 W Cerritos Ave #54, Bridgeport
                                            Gloucester, 856-264-4130
                                          </p>
                                        </div>
                                        <div class="content-box2">
                                          <h4>About the Mic</h4>
                                          <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Maecenas eleifend urna ligula…Lorem
                                            ipsum dolor sit amet, consectetur
                                            adipiscing elit. Maecenas eleifend
                                            urna ligula…
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>

                                  <div class="grid-list col-lg-3 col-md-6 col-sm-6">
                                    <div class="grid-box">
                                      <span class="featured-label">
                                        Featured
                                      </span>
                                      <a href="post-mic-details.html">
                                        <div class="img-box">
                                          <img src={GridImg3} alt="product-1" />
                                        </div>
                                        <div class="content-box">
                                          <h3>Comedy openmic</h3>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              access_time{" "}
                                            </i>
                                            08:00 pm
                                          </p>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              location_on{" "}
                                            </i>
                                            Brighton bar
                                          </p>
                                          <p>First come first serves</p>
                                          <p class="address">
                                            8 W Cerritos Ave #54, Bridgeport
                                            Gloucester, 856-264-4130
                                          </p>
                                        </div>
                                        <div class="content-box2">
                                          <h4>About the Mic</h4>
                                          <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Maecenas eleifend urna ligula…Lorem
                                            ipsum dolor sit amet, consectetur
                                            adipiscing elit. Maecenas eleifend
                                            urna ligula…
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>

                                  <div class="grid-list col-lg-3 col-md-6 col-sm-6">
                                    <div class="grid-box">
                                      <span class="featured-label">
                                        Featured
                                      </span>
                                      <a href="post-mic-details.html">
                                        <div class="img-box">
                                          <img src={GridImg4} alt="product-1" />
                                        </div>
                                        <div class="content-box">
                                          <h3>Comedy openmic</h3>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              access_time{" "}
                                            </i>
                                            08:00 pm
                                          </p>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              location_on{" "}
                                            </i>
                                            Brighton bar
                                          </p>
                                          <p>First come first serves</p>
                                          <p class="address">
                                            8 W Cerritos Ave #54, Bridgeport
                                            Gloucester, 856-264-4130
                                          </p>
                                        </div>
                                        <div class="content-box2">
                                          <h4>About the Mic</h4>
                                          <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Maecenas eleifend urna ligula…Lorem
                                            ipsum dolor sit amet, consectetur
                                            adipiscing elit. Maecenas eleifend
                                            urna ligula…
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>

                                <div class="row">
                                  <div class=" grid-list col-lg-3 col-md-6 col-sm-6">
                                    <div class="grid-box">
                                      <a href="post-mic-details.html">
                                        <div class="img-box">
                                          <img src={GridImg1} alt="product-1" />
                                        </div>
                                        <div class="content-box">
                                          <h3>Comedy openmic</h3>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              access_time{" "}
                                            </i>
                                            08:00 pm
                                          </p>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              location_on{" "}
                                            </i>
                                            Brighton bar
                                          </p>
                                          <p>First come first serves</p>
                                          <p class="address">
                                            8 W Cerritos Ave #54, Bridgeport
                                            Gloucester, 856-264-4130
                                          </p>
                                        </div>
                                        <div class="content-box2">
                                          <h4>About the Mic</h4>
                                          <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Maecenas eleifend urna ligula…Lorem
                                            ipsum dolor sit amet, consectetur
                                            adipiscing elit. Maecenas eleifend
                                            urna ligula…
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>

                                  <div class="grid-list col-lg-3 col-md-6 col-sm-6">
                                    <div class="grid-box">
                                      <a href="post-mic-details.html">
                                        <div class="img-box">
                                          <img src={GridImg2} alt="product-1" />
                                        </div>
                                        <div class="content-box">
                                          <h3>Comedy openmic</h3>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              access_time{" "}
                                            </i>
                                            08:00 pm
                                          </p>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              location_on{" "}
                                            </i>
                                            Brighton bar
                                          </p>
                                          <p>First come first serves</p>
                                          <p class="address">
                                            8 W Cerritos Ave #54, Bridgeport
                                            Gloucester, 856-264-4130
                                          </p>
                                        </div>
                                        <div class="content-box2">
                                          <h4>About the Mic</h4>
                                          <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Maecenas eleifend urna ligula…Lorem
                                            ipsum dolor sit amet, consectetur
                                            adipiscing elit. Maecenas eleifend
                                            urna ligula…
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>

                                  <div class="grid-list col-lg-3 col-md-6 col-sm-6">
                                    <div class="grid-box">
                                      <a href="post-mic-details.html">
                                        <div class="img-box">
                                          <img src={GridImg3} alt="product-1" />
                                        </div>
                                        <div class="content-box">
                                          <h3>Comedy openmic</h3>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              access_time{" "}
                                            </i>
                                            08:00 pm
                                          </p>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              location_on{" "}
                                            </i>
                                            Brighton bar
                                          </p>
                                          <p>First come first serves</p>
                                          <p class="address">
                                            8 W Cerritos Ave #54, Bridgeport
                                            Gloucester, 856-264-4130
                                          </p>
                                        </div>
                                        <div class="content-box2">
                                          <h4>About the Mic</h4>
                                          <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Maecenas eleifend urna ligula…Lorem
                                            ipsum dolor sit amet, consectetur
                                            adipiscing elit. Maecenas eleifend
                                            urna ligula…
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>

                                  <div class="grid-list col-lg-3 col-md-6 col-sm-6">
                                    <div class="grid-box">
                                      <a href="post-mic-details.html">
                                        <div class="img-box">
                                          <img src={GridImg4} alt="product-1" />
                                        </div>
                                        <div class="content-box">
                                          <h3>Comedy openmic</h3>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              access_time{" "}
                                            </i>
                                            08:00 pm
                                          </p>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              location_on{" "}
                                            </i>
                                            Brighton bar
                                          </p>
                                          <p>First come first serves</p>
                                          <p class="address">
                                            8 W Cerritos Ave #54, Bridgeport
                                            Gloucester, 856-264-4130
                                          </p>
                                        </div>
                                        <div class="content-box2">
                                          <h4>About the Mic</h4>
                                          <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Maecenas eleifend urna ligula…Lorem
                                            ipsum dolor sit amet, consectetur
                                            adipiscing elit. Maecenas eleifend
                                            urna ligula…
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>

                                <div class="row">
                                  <div class=" grid-list col-lg-3 col-md-6 col-sm-6">
                                    <div class="grid-box">
                                      <a href="post-mic-details.html">
                                        <div class="img-box">
                                          <img src={GridImg1} alt="product-1" />
                                        </div>
                                        <div class="content-box">
                                          <h3>Comedy openmic</h3>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              access_time{" "}
                                            </i>
                                            08:00 pm
                                          </p>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              location_on{" "}
                                            </i>
                                            Brighton bar
                                          </p>
                                          <p>First come first serves</p>
                                          <p class="address">
                                            8 W Cerritos Ave #54, Bridgeport
                                            Gloucester, 856-264-4130
                                          </p>
                                        </div>
                                        <div class="content-box2">
                                          <h4>About the Mic</h4>
                                          <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Maecenas eleifend urna ligula…Lorem
                                            ipsum dolor sit amet, consectetur
                                            adipiscing elit. Maecenas eleifend
                                            urna ligula…
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>

                                  <div class="grid-list col-lg-3 col-md-6 col-sm-6">
                                    <div class="grid-box">
                                      <a href="post-mic-details.html">
                                        <div class="img-box">
                                          <img src={GridImg2} alt="product-1" />
                                        </div>
                                        <div class="content-box">
                                          <h3>Comedy openmic</h3>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              access_time{" "}
                                            </i>
                                            08:00 pm
                                          </p>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              location_on{" "}
                                            </i>
                                            Brighton bar
                                          </p>
                                          <p>First come first serves</p>
                                          <p class="address">
                                            8 W Cerritos Ave #54, Bridgeport
                                            Gloucester, 856-264-4130
                                          </p>
                                        </div>
                                        <div class="content-box2">
                                          <h4>About the Mic</h4>
                                          <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Maecenas eleifend urna ligula…Lorem
                                            ipsum dolor sit amet, consectetur
                                            adipiscing elit. Maecenas eleifend
                                            urna ligula…
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>

                                  <div class="grid-list col-lg-3 col-md-6 col-sm-6">
                                    <div class="grid-box">
                                      <a href="post-mic-details.html">
                                        <div class="img-box">
                                          <img src={GridImg3} alt="product-1" />
                                        </div>
                                        <div class="content-box">
                                          <h3>Comedy openmic</h3>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              access_time{" "}
                                            </i>
                                            08:00 pm
                                          </p>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              location_on{" "}
                                            </i>
                                            Brighton bar
                                          </p>
                                          <p>First come first serves</p>
                                          <p class="address">
                                            8 W Cerritos Ave #54, Bridgeport
                                            Gloucester, 856-264-4130
                                          </p>
                                        </div>
                                        <div class="content-box2">
                                          <h4>About the Mic</h4>
                                          <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Maecenas eleifend urna ligula…Lorem
                                            ipsum dolor sit amet, consectetur
                                            adipiscing elit. Maecenas eleifend
                                            urna ligula…
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>

                                  <div class="grid-list col-lg-3 col-md-6 col-sm-6">
                                    <div class="grid-box">
                                      <a href="post-mic-details.html">
                                        <div class="img-box">
                                          <img src={GridImg4} alt="product-1" />
                                        </div>
                                        <div class="content-box">
                                          <h3>Comedy openmic</h3>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              access_time{" "}
                                            </i>
                                            08:00 pm
                                          </p>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              location_on{" "}
                                            </i>
                                            Brighton bar
                                          </p>
                                          <p>First come first serves</p>
                                          <p class="address">
                                            8 W Cerritos Ave #54, Bridgeport
                                            Gloucester, 856-264-4130
                                          </p>
                                        </div>
                                        <div class="content-box2">
                                          <h4>About the Mic</h4>
                                          <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Maecenas eleifend urna ligula…Lorem
                                            ipsum dolor sit amet, consectetur
                                            adipiscing elit. Maecenas eleifend
                                            urna ligula…
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>

                                <div class="row">
                                  <div class=" grid-list col-lg-3 col-md-6 col-sm-6">
                                    <div class="grid-box">
                                      <a href="post-mic-details.html">
                                        <div class="img-box">
                                          <img src={GridImg1} alt="product-1" />
                                        </div>
                                        <div class="content-box">
                                          <h3>Comedy openmic</h3>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              access_time{" "}
                                            </i>
                                            08:00 pm
                                          </p>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              location_on{" "}
                                            </i>
                                            Brighton bar
                                          </p>
                                          <p>First come first serves</p>
                                          <p class="address">
                                            8 W Cerritos Ave #54, Bridgeport
                                            Gloucester, 856-264-4130
                                          </p>
                                        </div>
                                        <div class="content-box2">
                                          <h4>About the Mic</h4>
                                          <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Maecenas eleifend urna ligula…Lorem
                                            ipsum dolor sit amet, consectetur
                                            adipiscing elit. Maecenas eleifend
                                            urna ligula…
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>

                                  <div class="grid-list col-lg-3 col-md-6 col-sm-6">
                                    <div class="grid-box">
                                      <a href="post-mic-details.html">
                                        <div class="img-box">
                                          <img src={GridImg2} alt="product-1" />
                                        </div>
                                        <div class="content-box">
                                          <h3>Comedy openmic</h3>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              access_time{" "}
                                            </i>
                                            08:00 pm
                                          </p>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              location_on{" "}
                                            </i>
                                            Brighton bar
                                          </p>
                                          <p>First come first serves</p>
                                          <p class="address">
                                            8 W Cerritos Ave #54, Bridgeport
                                            Gloucester, 856-264-4130
                                          </p>
                                        </div>
                                        <div class="content-box2">
                                          <h4>About the Mic</h4>
                                          <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Maecenas eleifend urna ligula…Lorem
                                            ipsum dolor sit amet, consectetur
                                            adipiscing elit. Maecenas eleifend
                                            urna ligula…
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div
                                    id="adds-banner"
                                    class="grid-list col-lg-6 col-md-6 col-sm-6"
                                  >
                                    <div class="grid-box grid-bg-none">
                                      <div class="img-add add-one">
                                        <img
                                          src="images/add/add-two.png"
                                          alt="add"
                                        />
                                      </div>
                                      <div class="img-add add-two">
                                        <img
                                          src="images/add/add-bottom.png"
                                          alt="add"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div id="sunday" class="tab-pane ">
                              <div class="list-layout">
                                <div class="row">
                                  <div class=" grid-list col-lg-3 col-md-6 col-sm-6">
                                    <div class="grid-box">
                                      <a href="#">
                                        <div class="img-box">
                                          <img
                                            src="images/grid-images/img-1.svg"
                                            alt="product-1"
                                          />
                                        </div>
                                        <div class="content-box">
                                          <h3>Comedy openmic</h3>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              access_time{" "}
                                            </i>
                                            08:00 pm
                                          </p>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              location_on{" "}
                                            </i>
                                            Brighton bar
                                          </p>
                                          <p>First come first serves</p>
                                          <p class="address">
                                            8 W Cerritos Ave #54, Bridgeport
                                            Gloucester, 856-264-4130
                                          </p>
                                        </div>
                                        <div class="content-box2">
                                          <h4>About the Mic</h4>
                                          <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Maecenas eleifend urna ligula…Lorem
                                            ipsum dolor sit amet, consectetur
                                            adipiscing elit. Maecenas eleifend
                                            urna ligula…
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>

                                  <div class="grid-list col-lg-3 col-md-6 col-sm-6">
                                    <div class="grid-box">
                                      <a href="#">
                                        <div class="img-box">
                                          <img
                                            src="images/grid-images/img-2.svg"
                                            alt="product-1"
                                          />
                                        </div>
                                        <div class="content-box">
                                          <h3>Comedy openmic</h3>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              access_time{" "}
                                            </i>
                                            08:00 pm
                                          </p>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              location_on{" "}
                                            </i>
                                            Brighton bar
                                          </p>
                                          <p>First come first serves</p>
                                          <p class="address">
                                            8 W Cerritos Ave #54, Bridgeport
                                            Gloucester, 856-264-4130
                                          </p>
                                        </div>
                                        <div class="content-box2">
                                          <h4>About the Mic</h4>
                                          <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Maecenas eleifend urna ligula…Lorem
                                            ipsum dolor sit amet, consectetur
                                            adipiscing elit. Maecenas eleifend
                                            urna ligula…
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>

                                  <div class="grid-list col-lg-3 col-md-6 col-sm-6">
                                    <div class="grid-box">
                                      <a href="#">
                                        <div class="img-box">
                                          <img
                                            src="images/grid-images/img-3.svg"
                                            alt="product-1"
                                          />
                                        </div>
                                        <div class="content-box">
                                          <h3>Comedy openmic</h3>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              access_time{" "}
                                            </i>
                                            08:00 pm
                                          </p>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              location_on{" "}
                                            </i>
                                            Brighton bar
                                          </p>
                                          <p>First come first serves</p>
                                          <p class="address">
                                            8 W Cerritos Ave #54, Bridgeport
                                            Gloucester, 856-264-4130
                                          </p>
                                        </div>
                                        <div class="content-box2">
                                          <h4>About the Mic</h4>
                                          <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Maecenas eleifend urna ligula…Lorem
                                            ipsum dolor sit amet, consectetur
                                            adipiscing elit. Maecenas eleifend
                                            urna ligula…
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>

                                  <div class="grid-list col-lg-3 col-md-6 col-sm-6">
                                    <div class="grid-box">
                                      <a href="#">
                                        <div class="img-box">
                                          <img
                                            src="images/grid-images/img-4.svg"
                                            alt="product-1"
                                          />
                                        </div>
                                        <div class="content-box">
                                          <h3>Comedy openmic</h3>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              access_time{" "}
                                            </i>
                                            08:00 pm
                                          </p>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              location_on{" "}
                                            </i>
                                            Brighton bar
                                          </p>
                                          <p>First come first serves</p>
                                          <p class="address">
                                            8 W Cerritos Ave #54, Bridgeport
                                            Gloucester, 856-264-4130
                                          </p>
                                        </div>
                                        <div class="content-box2">
                                          <h4>About the Mic</h4>
                                          <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Maecenas eleifend urna ligula…Lorem
                                            ipsum dolor sit amet, consectetur
                                            adipiscing elit. Maecenas eleifend
                                            urna ligula…
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>

                                <div class="row">
                                  <div class=" grid-list col-lg-3 col-md-6 col-sm-6">
                                    <div class="grid-box">
                                      <a href="post-mic-details.html">
                                        <div class="img-box">
                                          <img
                                            src="images/grid-images/img-1.svg"
                                            alt="product-1"
                                          />
                                        </div>
                                        <div class="content-box">
                                          <h3>Comedy openmic</h3>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              access_time{" "}
                                            </i>
                                            08:00 pm
                                          </p>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              location_on{" "}
                                            </i>
                                            Brighton bar
                                          </p>
                                          <p>First come first serves</p>
                                          <p class="address">
                                            8 W Cerritos Ave #54, Bridgeport
                                            Gloucester, 856-264-4130
                                          </p>
                                        </div>
                                        <div class="content-box2">
                                          <h4>About the Mic</h4>
                                          <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Maecenas eleifend urna ligula…Lorem
                                            ipsum dolor sit amet, consectetur
                                            adipiscing elit. Maecenas eleifend
                                            urna ligula…
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>

                                  <div class="grid-list col-lg-3 col-md-6 col-sm-6">
                                    <div class="grid-box">
                                      <a href="post-mic-details.html">
                                        <div class="img-box">
                                          <img
                                            src="images/grid-images/img-2.svg"
                                            alt="product-1"
                                          />
                                        </div>
                                        <div class="content-box">
                                          <h3>Comedy openmic</h3>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              access_time{" "}
                                            </i>
                                            08:00 pm
                                          </p>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              location_on{" "}
                                            </i>
                                            Brighton bar
                                          </p>
                                          <p>First come first serves</p>
                                          <p class="address">
                                            8 W Cerritos Ave #54, Bridgeport
                                            Gloucester, 856-264-4130
                                          </p>
                                        </div>
                                        <div class="content-box2">
                                          <h4>About the Mic</h4>
                                          <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Maecenas eleifend urna ligula…Lorem
                                            ipsum dolor sit amet, consectetur
                                            adipiscing elit. Maecenas eleifend
                                            urna ligula…
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div
                                    id="adds-banner"
                                    class="grid-list col-lg-6 col-md-6 col-sm-6"
                                  >
                                    <div class="grid-box grid-bg-none">
                                      <div class="img-add add-one">
                                        <img
                                          src="images/add/add-two.png"
                                          alt="add"
                                        />
                                      </div>
                                      <div class="img-add add-two">
                                        <img
                                          src="images/add/add-bottom.png"
                                          alt="add"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div id="monday" class="tab-pane">
                              <div class="list-layout">
                                <div class="row">
                                  <div class=" grid-list col-lg-3 col-md-6 col-sm-6">
                                    <div class="grid-box">
                                      <a href="post-mic-details.html">
                                        <div class="img-box">
                                          <img
                                            src="images/grid-images/img-1.svg"
                                            alt="product-1"
                                          />
                                        </div>
                                        <div class="content-box">
                                          <h3>Comedy openmic</h3>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              access_time{" "}
                                            </i>
                                            08:00 pm
                                          </p>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              location_on{" "}
                                            </i>
                                            Brighton bar
                                          </p>
                                          <p>First come first serves</p>
                                          <p class="address">
                                            8 W Cerritos Ave #54, Bridgeport
                                            Gloucester, 856-264-4130
                                          </p>
                                        </div>
                                        <div class="content-box2">
                                          <h4>About the Mic</h4>
                                          <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Maecenas eleifend urna ligula…Lorem
                                            ipsum dolor sit amet, consectetur
                                            adipiscing elit. Maecenas eleifend
                                            urna ligula…
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>

                                  <div class="grid-list col-lg-3 col-md-6 col-sm-6">
                                    <div class="grid-box">
                                      <a href="post-mic-details.html">
                                        <div class="img-box">
                                          <img
                                            src="images/grid-images/img-2.svg"
                                            alt="product-1"
                                          />
                                        </div>
                                        <div class="content-box">
                                          <h3>Comedy openmic</h3>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              access_time{" "}
                                            </i>
                                            08:00 pm
                                          </p>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              location_on{" "}
                                            </i>
                                            Brighton bar
                                          </p>
                                          <p>First come first serves</p>
                                          <p class="address">
                                            8 W Cerritos Ave #54, Bridgeport
                                            Gloucester, 856-264-4130
                                          </p>
                                        </div>
                                        <div class="content-box2">
                                          <h4>About the Mic</h4>
                                          <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Maecenas eleifend urna ligula…Lorem
                                            ipsum dolor sit amet, consectetur
                                            adipiscing elit. Maecenas eleifend
                                            urna ligula…
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>

                                  <div class="grid-list col-lg-3 col-md-6 col-sm-6">
                                    <div class="grid-box">
                                      <a href="post-mic-details.html">
                                        <div class="img-box">
                                          <img
                                            src="images/grid-images/img-3.svg"
                                            alt="product-1"
                                          />
                                        </div>
                                        <div class="content-box">
                                          <h3>Comedy openmic</h3>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              access_time{" "}
                                            </i>
                                            08:00 pm
                                          </p>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              location_on{" "}
                                            </i>
                                            Brighton bar
                                          </p>
                                          <p>First come first serves</p>
                                          <p class="address">
                                            8 W Cerritos Ave #54, Bridgeport
                                            Gloucester, 856-264-4130
                                          </p>
                                        </div>
                                        <div class="content-box2">
                                          <h4>About the Mic</h4>
                                          <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Maecenas eleifend urna ligula…Lorem
                                            ipsum dolor sit amet, consectetur
                                            adipiscing elit. Maecenas eleifend
                                            urna ligula…
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>

                                  <div class="grid-list col-lg-3 col-md-6 col-sm-6">
                                    <div class="grid-box">
                                      <a href="post-mic-details.html">
                                        <div class="img-box">
                                          <img
                                            src="images/grid-images/img-4.svg"
                                            alt="product-1"
                                          />
                                        </div>
                                        <div class="content-box">
                                          <h3>Comedy openmic</h3>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              access_time{" "}
                                            </i>
                                            08:00 pm
                                          </p>
                                          <p>
                                            <i class="material-icons">
                                              {" "}
                                              location_on{" "}
                                            </i>
                                            Brighton bar
                                          </p>
                                          <p>First come first serves</p>
                                          <p class="address">
                                            8 W Cerritos Ave #54, Bridgeport
                                            Gloucester, 856-264-4130
                                          </p>
                                        </div>
                                        <div class="content-box2">
                                          <h4>About the Mic</h4>
                                          <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Maecenas eleifend urna ligula…Lorem
                                            ipsum dolor sit amet, consectetur
                                            adipiscing elit. Maecenas eleifend
                                            urna ligula…
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
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

              <footer>
                <section class="copyright-section ">
                  <div class="container">
                    <div class="div-Copyright">
                      <div class="row">
                        <div class="col-lg-9 col-md-9 col-sm-6">
                          <div class="social-media">
                            <ul class="social-media-icon">
                              <li>
                                <a href="#" class="icon-g-pluse">
                                  <i class="fa fa-google-plus "></i>
                                </a>
                              </li>
                              <li>
                                <a href="#" class="icon-facebook">
                                  <i class="fa fa-facebook-official "></i>
                                </a>
                              </li>
                              <li>
                                <a href="#" class="icon-twitter">
                                  <i class="fa fa-twitter "></i>
                                </a>
                              </li>
                            </ul>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Quisque aliquet lacus turpis, vitae accumsan
                              odio lobortis venenatis.
                            </p>
                          </div>
                        </div>

                        <div class="col-lg-3 col-md-3 col-sm-6">
                          <div class="Copyright">
                            <p>© 2019 openmiclist.com</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </footer>
            </div>

            <div
              id="login-welcome"
              class="modal fade modal-welcome"
              role="dialog"
            >
              <div class="modal-dialog modal-dialog-1000">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class=""></h4>
                    <button type="button" class="close" data-dismiss="modal">
                      &times;
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="welcome-content">
                      <div class="welcome-heading">
                        <h2>Welcome</h2>
                      </div>

                      <p>
                        We’re thrilled to hear from you. Our inbox can’t wait to
                        get your messages, so talk to us any time you like.
                      </p>

                      <div class="dash-border"></div>
                      <div class="social-media-pop-up">
                        <p>Follow us on</p>
                        <ul class="social-icons">
                          <li>
                            <a href="" class="g-pluse">
                              <i
                                class="fa fa-google-plus"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="" class="facebook">
                              <i
                                class="fa fa-facebook-official"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="" class="twitter">
                              <i class="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="login-post-mic"
            class="modal fade modal-custom modal-login"
            role="dialog"
          >
            <div class="modal-dialog modal-dialog-1000">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class=""></h4>
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
                <div class="modal-body">
                  <div class="modal-logo">
                    <a href="#">
                      <img src="images/logo-black.svg" alt="logo" />
                    </a>
                  </div>
                  <div class="modal-heading dotted-gradient">
                    <h3>Login and Post your mic...</h3>
                  </div>
                  <div class="login-form">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="account-text">
                          <p>
                            You need an account to edit, manage, and eventually
                            delete your mic when the venue goes out of business.
                          </p>
                          <p>
                            If you not have an account.{" "}
                            <a href="#">
                              Please register and create an account.
                            </a>
                          </p>
                        </div>
                      </div>

                      <div class="col-lg-6">
                        <div class="form-group">
                          <label class="has-float-label">
                            <input
                              class="form-control"
                              type="text"
                              placeholder="Email Address"
                            />
                            <span>Email Address</span>
                          </label>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label class="has-float-label">
                            <input
                              class="form-control"
                              id="password-field"
                              type="password"
                              placeholder="Password"
                            />
                            <span>Password</span>
                          </label>
                          <span
                            toggle="#password-field"
                            class="fa fa-fw fa-eye field-icon toggle-password"
                          ></span>
                          <span class="error">Invalid password</span>
                        </div>
                      </div>

                      <div class="col-lg-6">
                        <label class="container-check">
                          Keep me signed in
                          <input type="checkbox" checked="checked" />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      <div class="col-lg-6 text-right">
                        <div class="forgot-password-link">
                          <a href="">Forgot password</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="login-form-footer">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="skip-arrow">
                          <a href="sign-up.html">
                            Skip and register{" "}
                            <span>
                              <i class="material-icons">arrow_right_alt</i>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div class="col-lg-6 text-right">
                        <div class="btn-groups">
                          <a href="#" class="btn">
                            Not Now
                          </a>
                          <a href="#" class="btn btn-login">
                            Login Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="change-region" class="modal fade modal-custom" role="dialog">
            <div class="modal-dialog modal-dialog-1000">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class=""></h4>
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
                <div class="modal-body">
                  <div class="modal-logo">
                    <a href="#">
                      <img src="images/logo-black.svg" alt="logo" />
                    </a>
                  </div>
                  <div class="modal-heading dotted-gradient">
                    <h3>Register and Post your mic...</h3>
                  </div>

                  <div class="row">
                    <div class="col-lg-4 col-md-4 col-6">
                      <a href="#" class="modal-post">
                        <div class="postbox">
                          <img src="images/places/1.jpg" alt="" />
                          <h2>Manhattan</h2>
                        </div>
                      </a>
                    </div>
                    <div class="col-lg-4 col-md-4 col-6">
                      <a href="#" class="modal-post">
                        <div class="postbox">
                          <img src="images/places/2.jpg" alt="" />
                          <h2>Brooklyn</h2>
                        </div>
                      </a>
                    </div>
                    <div class="col-lg-4 col-md-4 col-6">
                      <a href="#" class="modal-post">
                        <div class="postbox">
                          <img src="images/places/3.jpg" alt="" />
                          <h2>Queens</h2>
                        </div>
                      </a>
                    </div>

                    <div class="col-lg-4 col-md-4  col-6">
                      <a href="#" class="modal-post">
                        <div class="postbox">
                          <img src="images/places/4.jpg" alt="" />
                          <h2>Staten Island</h2>
                        </div>
                      </a>
                    </div>
                    <div class="col-lg-4 col-md-4  col-6">
                      <a href="#" class="modal-post">
                        <div class="postbox">
                          <img src="images/places/5.jpg" alt="" />
                          <h2>Bronx</h2>
                        </div>
                      </a>
                    </div>
                    <div class="col-lg-4 col-md-4  col-6">
                      <a href="#" class="modal-post">
                        <div class="postbox">
                          <img src="images/places/6.jpg" alt="" />
                          <h2>Suburbs</h2>
                        </div>
                      </a>
                    </div>

                    <div class="col-lg-4 col-md-4  col-6">
                      <a href="#" class="modal-post">
                        <div class="postbox">
                          <img src="images/places/7.jpg" alt="" />
                          <h2>Long Island</h2>
                        </div>
                      </a>
                    </div>
                    <div class="col-lg-4 col-md-4  col-6">
                      <a href="#" class="modal-post">
                        <div class="postbox">
                          <img src="images/places/8.jpg" alt="" />
                          <h2>New Jersey</h2>
                        </div>
                      </a>
                    </div>
                    <div class="col-lg-4 col-md-4  col-6">
                      <a href="#" class="modal-post">
                        <div class="postbox">
                          <img src="images/places/9.jpg" alt="" />
                          <h2>Philadelphia</h2>
                        </div>
                      </a>
                    </div>
                    <div class="col-lg-4 col-md-4  col-6">
                      <a href="#" class="modal-post">
                        <div class="postbox">
                          <img src="images/places/10.jpg" alt="" />
                          <h2>DC</h2>
                        </div>
                      </a>
                    </div>
                    <div class="col-lg-4 col-md-4  col-6">
                      <a href="#" class="modal-post">
                        <div class="postbox">
                          <img src="images/places/11.jpg" alt="" />
                          <h2>Baltimore</h2>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="moadl-filter" class="modal fade modal-custom" role="dialog">
            <div class="modal-dialog ">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class=""></h4>
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
                <div class="modal-body">
                  <div class="col-lg-6 col-md-12">
                    <div class="form-group">
                      <span class="has-float-label">
                        <div class="select2-div">
                          <select class="select-multiple">
                            <option>No Drink Minimum</option>
                            <option>Drink Minimum</option>
                          </select>
                        </div>
                        <label for="second">Select Mic Type</label>
                      </span>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-12 ">
                    <div class="form-group">
                      <span class="has-float-label">
                        <div class="select2-div">
                          <select class="select-multiple">
                            <option>All Mic</option>
                            <option>Featured</option>
                          </select>
                        </div>
                        <label for="third">Short By</label>
                      </span>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-12 ">
                    <div class="form-group search-bar">
                      <input
                        type="text"
                        class="form-control search"
                        placeholder="Quick Search"
                      />
                      <i class="fa fa-search icon"></i>
                    </div>
                  </div>
                  <div class="col-lg-6 text-right">
                    <div class="btn-groups">
                      <a href="#" class="btn btn-login">
                        Apply
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="modal-conatct"
            class="modal fade modal-custom  modal-contact"
            role="dialog"
          >
            <div class="modal-dialog modal-dialog-1000">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class=""></h4>
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
                <div class="modal-body">
                  <div class="modal-logo">
                    <a href="#">
                      <img src="images/logo-black.svg" alt="logo" />
                    </a>
                  </div>
                  <div class="modal-heading dotted-gradient">
                    <h3>Contact to openmiclist</h3>
                  </div>
                  <div class="Contact-form">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="contact-content">
                          <p>Choose a option and get the action</p>
                        </div>
                      </div>

                      <div class="col-lg-12">
                        <div class="form-group">
                          <span class="has-float-label">
                            <div class="select2-div">
                              <select class="select-multiple">
                                <option>I can’t acces my account</option>
                                <option>I can't link my phone number</option>
                              </select>
                            </div>
                            <label for="second">Select option to contact</label>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <script src="js/jquery-slim.min.js"></script>
          <script src="js/popper.min.js"></script>
          <script src="js/bootstrap.min.js"></script>
          <script src="js/owl.carousel.min.js"></script>
          <script src="js/custom.js" type="text/javascript"></script>
          <script src="js/cbpAnimatedHeader.min.js"></script>
          <script src="js/classie.js"></script>
          <script src="js/modernizr.js" type="text/javascript"></script>
          <script src="js/modernizr.custom.js"></script>

          <script src="js/wow.js"></script>

          <script src="js/select2.min.js"></script>

          {/* <script>
            $(document).ready(function()
            {$(".select-multiple").select2({
              minimumResultsForSearch: -1,
            })}
            );
          </script> */}
        </body>
      </html>
    </div>
  );
}

export default Home;
