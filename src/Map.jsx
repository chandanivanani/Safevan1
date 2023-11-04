import React from 'react';
import i2 from "../src/images/Map.jpg";

const Map = () => {
  return (
    <div>
    <center>
      <img className="map" src={i2}></img>
      <h4>Student to pick up from this stop: <span className='num'>4</span></h4>
      </center>
    </div>
  )
}

export default Map;
