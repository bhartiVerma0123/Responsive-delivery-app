import React from "react";
import Image1 from "../../assets/images/menu/burger-11.jpg";
import Image2 from "../../assets/images/menu/burger-12.jpg";
import Image3 from "../../assets/images/menu/burger-13.jpg";
import Image4 from "../../assets/images/menu/burger-14.jpg";
import Image5 from "../../assets/images/menu/burger-15.jpg";
import Image6 from "../../assets/images/menu/burger-16.jpg";
import Image7 from "../../assets/images/menu/burger-17.jpg";
import Image8 from "../../assets/images/menu/burger-18.jpg";
import finger from "../../assets/images/menu/ads-1.jpg";
import burger from "../../assets/images/menu/ads-2.jpg";
import { IoStarOutline } from "react-icons/io5";
import { Cards } from "./Cards";
import { Navbar } from "../Navbar";
const menuBar = [
  {
    id: "0001",
    image: Image1,
    title: "Crispy Chicken",
    paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
    rating: 5,
    price: 99.15,
  },
  {
    id: "0002",
    image: Image2,
    title: "Ultimate Bacon",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 4.5,
    price: 99.32,
  },
  {
    id: "0003",
    image: Image3,
    title: "Black Sheep",
    paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
    rating: 4,
    price: 69.15,
  },
  {
    id: "0004",
    image: Image4,
    title: "Vegan Burger",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 3.5,
    price: 99.25,
  },
  {
    id: "0005",
    image: Image5,
    title: "Double Burger",
    paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
    rating: 3.0,
    price: 59.25,
  },
  {
    id: "0006",
    image: Image6,
    title: "Turkey Burger",
    paragraph: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 3,
    price: 79.18,
  },
  {
    id: "0007",
    image: Image7,
    title: "Smokey House",
    paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 2.5,
    price: 99.19,
  },
  {
    id: "0008",
    image: Image8,
    title: "Classic Burger",
    paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
    rating: 2.0,
    price: 89.12,
  },
];

export const Section3 = () => {
  const ratingInstar = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i > 0.5) {
        stars.push(<IoStarOutline key={i} className="IoStarOutline-fill" />);
        rating--;
      } else if (i > 0 && rating < 1) {
        stars.push(
          <IoStarOutline key={"half"} className="IoStarOutline-half" />
        );
        rating--;
      } else {
        stars.push(
          <IoStarOutline key={`empty${i}`} className="IoStarOutline" />
        );
        rating--;
      }
    }
    return stars;
  };
  return (
    <>
      <div className="middle-section">
        <div className="container">
          <div className="middle-head pt-5">
            <h2>Our Crazy Burger</h2>
            <p className="p-3 fs-5 text-var(--grey)">
              Porta semper lacus cursus, feugiat primis ultrice a ligula risus
              auctor an tempus feugiat dolor lacinia cubilia curae integer orc
              congue and metus integer in integer metus.
            </p>
          </div>
          <div className="menu-card d-flex flex-md-wrap justify-content-evenly align-items-center">
            {menuBar.map((items, index) => (
              <div key={items.id} className="col-lg-4 col-md-6 col-xl-3">
                <div className="card-data text-center ">
                  <Cards
                    key={index}
                    image={items.image}
                    title={items.title}
                    paragraph={items.paragraph}
                    rating={items.rating}
                    price={items.price}
                    ratingInstar={ratingInstar}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="advertise d-flex justify-content-center align-items-center">
            <div className="advertise_card col-sm-10 col-md-4 col-lg-4 position-relative align-items-center justify-content-center">
              <div className="advertise_img">
                <img src={finger} alt="" />
              </div>
              <div className="advertise_content position-absolute  ">
                <h4>
                  get your free <br /> cheese fries
                </h4>
                <button className="btn btn-danger">Learn More</button>
              </div>
            </div>
            <div className="advertise_card  col-sm-10 col-md-8 col-lg-6 d-flex position-relative align-items-center justify-content-center">
              <div className="advertise_img">
                +
                <img src={burger} alt="" />
              </div>
              <div className="advertise_content position-absolute  ">
                <h4>
                  get your free <br /> cheese fries
                </h4>
                <button className="btn btn-danger">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
