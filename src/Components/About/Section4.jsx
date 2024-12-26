import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Section6 } from "./Section6";
export const Section4 = () => {
  return (
    <>
    <Navbar/>
    <div className="contact_page" id="contact">
      <div className="container-fluid">
        <div className="row m-0">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div>
              <h3 className="heading">
                Contact Me<span style={{ color: "#f87652" }}>.</span>
              </h3>

              <p className="paragraph">Feel free to contact</p>
              <form name="submit-googlesheet" method="post">
                <div className="form-group">
                  <input
                    className="form-control"
                    name="Name"
                    placeholder="Your Name"
                    type="text"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    type="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    name="subject"
                    placeholder="Subject"
                    type="text"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    placeholder="Type your message..."
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <button className="btn bg-danger text-white p-2 m-2" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Section6/>
    <Footer/>
    </>
  );
};
