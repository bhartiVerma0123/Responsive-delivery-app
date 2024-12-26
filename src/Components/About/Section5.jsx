import React from "react";
import apple from "../../assets/images/shop/appstore.png";
import google from "../../assets/images/shop/googleplay.png";
import shop_image from "../../assets/images/shop/e-shop.png";
import Brand1 from "../../assets/images/brands/brand-11.png";
import Brand2 from "../../assets/images/brands/brand-12.png";
import Brand3 from "../../assets/images/brands/brand-13.png";
import Brand4 from "../../assets/images/brands/brand-14.png";
import Brand5 from "../../assets/images/brands/brand-15.png";
import Brand6 from "../../assets/images/brands/brand-16.png";
import Brand7 from "../../assets/images/brands/brand-17.png";
import Brand8 from "../../assets/images/brands/brand-18.png";
export const Section5 = () => {
  return (
    <>
      <section className="discount_section">
        <div className="container">
          <div className="offer_data d-flex col-lg-10 align-content-center justify-content-evenly p-4">
            <div className="offer_content col-lg-6">
              <div className="offer">
                <h2>Download mobile App and</h2>
                <p className="offer_para">save up to 20%</p>
                <p>
                  Aliquam a augue suscipit, luctus neque purus ipsum and neque
                  dolor primis libero tempus, blandit varius
                </p>
              </div>
              <div className="offer_card d-flex img-fluid  ">
                <img src={apple} alt="" />
                <img src={google} alt="" />
              </div>
            </div>
            <div className="shop_img ">
              <img src={shop_image} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
