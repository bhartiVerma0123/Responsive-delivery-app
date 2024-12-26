import React from "react";
import Pizza from "../../assets/images/about/pizza.png";
import Salad from "../../assets/images/about/salad.png";
import Delivery from "../../assets/images/about/delivery-bike.png";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Section3 } from "./Section3";
const wrapperData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
  },
  {
    image: Salad,
    title: "Qualty Foods",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
  },
];

export const Section2 = () => {
  return (
    <>
    <Navbar/>
      <div className="Section2">
        <div className="container">
          <div className="mid-content ">
            <h2 className="heading fs-2">
              The burger tastes better when
              <br /> you eat it with your family
            </h2>
            <p className="para1 p-2 fs-5 text-var(--grey)">
              Porta semper lacus cursus, feugiat primis ultrice a ligula risus
              auctor an tempus feugiat dolor <br />
              lacinia cubilia curae integer orci congue and metus integer primis
              in integer metus
            </p>
            <button className="btn btn-primary order-btn ">
              Explore Full Menu
            </button>
          </div>
        </div>
        <div className="section-wrapper">
          <div className="card-section d-flex">
            {wrapperData.map((items, index) => (
              <div className="lg={4}  md={6} mb-4 mb-md-0" key={index}>
                <div className="cards text-center">
                  <img src={items.image} alt="" />
                </div>
                <h4 className="fs-2">{items.title}</h4>
                <p>{items.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Section3/>
      <Footer/>
    </>
  );
};
