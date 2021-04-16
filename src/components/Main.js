import React from "react";
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
import LoginModal from "./LoginModal";
import ChangeRegionModal from "./ChangeRegionModal";
import FilterModal from "./FilterModal";
import ContactModal from "./ContactModal";
import WelcomeModal from "./WelcomeModal";
//import "../assets/css/taggle.min.css";

function Main() {
  return (
    <>
      <div className="wrapper">
        <DashboardHeader />
        <PageContent />
      </div>
      {/* <LoginModal /> */}
      <ChangeRegionModal />
      <FilterModal />
      <ContactModal />
      <WelcomeModal />
    </>
  );
}

export default Main;
