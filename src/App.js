import React from "react";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Banner from "./component/pages/Banner";
import Feature_section from "./component/Feature_section";
import Choos_section from "./component/Choos_section";
import Blog_section from "./component/Blog_section";
import Footer from "./component/Footer";

const App = () => {
  let data = [
    {
      bussness_name: "Business Strategy",
      bussness_des:
        "Business and strategy are integral components of any organization's success. Business refers to the activiti",
      card_price: "220$",
    },
    {
      bussness_name: "Business Strategy",
      bussness_des:
        "Business and strategy are integral components of any organization's success. Business refers to the activiti",
      card_price: "220$",
    },
    {
      bussness_name: "Business Strategy",
      bussness_des:
        "Business and strategy are integral components of any organization's success. Business refers to the activiti",
      card_price: "220$",
    },
  ];

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Banner />
      <section class="features">
        <div class="container">
          <div class="features-main-box">
            <div class="title text-center">
              <h2 class="fs-5">Our Features</h2>
              <p class="text-center">
                We are the best company to <br />
                improve your deals
              </p>
            </div>
            <div class="row">
              {data.map((val, index) => {
                return (
                  <>
                    <Feature_section
                      title={val.bussness_name}
                      des={val.bussness_des}
                      price={val.card_price}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Choos_section />
      <Blog_section />
      <Footer />
    </>
  );
};

export default App;
