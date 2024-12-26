import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
export const Cards = ({ image, title, paragraph, rating, price ,ratingInstar}) => {
  return (
    <div className="single_data">
      <div className="container">
        <div className="menu_data ">
          <div className="card_img">
            <img src={image} alt="" />
          </div>
          <div className="card_body">
            <div className="d-flex align-items-center justify-content-between">
              <div className="rating">{ratingInstar(rating)}</div>
              <div className="wishlist">
                <IoMdHeartEmpty />
              </div>
            </div>
            <h4>{title}</h4>
            <p>{paragraph}</p>
            <div className=" price_card d-flex align-items-center justify-content-between pb-4">
              <div className="menu_price">
                <h5>${price}</h5>
              </div>
              <div className="add_card">
                <IoBagOutline />
                <button> add to card</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
