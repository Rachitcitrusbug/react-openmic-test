import React, { useState, useEffect } from "react";
import DashboardHeader from "./DashboardHeader";
import PageContent from "./PageContent";
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

function Main() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  });

  const element = document.querySelector(".cbp-af-header");
  const handlePageScroll = () => {
    if (element && offset > 50) {
      element.classList.add("cbp-af-header-shrink");
    }
    if (element && offset < 50) {
      element.classList.remove("cbp-af-header-shrink");
    }
  };

  return (
    <>
      <div className="wrapper" onScroll={handlePageScroll()}>
        <DashboardHeader />
        <PageContent />
      </div>
    </>
  );
}

export default Main;
