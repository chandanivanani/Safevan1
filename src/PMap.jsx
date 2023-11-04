import React from 'react';
import i2 from "../src/images/Map.jpg";
import Pnavbar from './Pnavbar';

const PMap = () => {
  return (
    <div>
    <Pnavbar />
    <center>
      <img className='map' src={i2}></img>
      </center>
    </div>
  )
}

export default PMap;
