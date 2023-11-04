import React from "react";
import Common from "./Common";
import i2 from "../src/images/2.jpg";
import { Button } from "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
    <Navbar />
      <Common name="Get start with " imgsrc={i2} visit="/login" btnname="Get Started" />
    </>
  );
};

export default Home;
