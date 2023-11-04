import React from "react";
import Common from "./Common";
import web from "../src/images/about.svg";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
    <Navbar 
    />
      <Common name="Welcome to About Page" imgsrc={web} visit="/contact" btnname="Contact Now" />
    </>
  );
};
export default About;