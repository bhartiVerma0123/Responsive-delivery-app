import React from "react";
import Hero2 from "../../assets/images/hero/hero-2.png";
export const Section = () => {
  return (
    <>
      <div className="hero-Section">
        <div className="container">
          <div className="hero-content ">
            <div className="hero-data col-lg-6 col-md-8  ">
              <div className="Burger position-relative ">
                <img src={Hero2} alt="" />
              </div>
            </div>
            <div className="section-content col-lg-6 col-md-6 px-md-4 justify-content-center align-content-center flex-lg-column text-white ">
              <h2 className="fs-1 fw-bolder">New Burger</h2>
              <h4 className="fs-3 fw-medium">With Onion</h4>
              <p className="fs-4">
                Feugiat primis ligula risus auctor laoreet augue egestas mauris
                viverra tortor in iaculis pretium at magna mauris ipsum primis
                rhoncus feugiat
              </p>
              <button className="btn btn-primary order-btn ">Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
