import React from "react";
import Common from "./Common";
import i2 from "../src/images/2.jpg";
import SAMnavbar from "./SMAnavbar";

const SMAHome = () => {
  return (
    <>
      <SAMnavbar/>
      <Common name="Get start with " imgsrc={i2} visit="/login" btnname="Get Started" />
    </>
  );
};

export default SMAHome;
