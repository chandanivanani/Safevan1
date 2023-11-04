import React from "react";
import Common from "./Common";
import i2 from "../src/images/2.jpg";
import Dnavbar from "./Dnavbar";

const DHome = () => {
  return (
    <>
    <Dnavbar />
    <Common name="Get start with " imgsrc={i2} visit="/map" btnname="Start Trip" />
    </>
  );
};

export default DHome;
