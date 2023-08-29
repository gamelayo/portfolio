import React from "react";
import Home from "../component/Home";
import Skills from "../component/Skills";
import Work from "../component/Work";
import Contact from "../component/Contact";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import About from "../component/About";

const Main = ({ setSelectedId, setShowModal }) => {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <About />
      <Work setSelectedId={setSelectedId} setShowModal={setShowModal} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
