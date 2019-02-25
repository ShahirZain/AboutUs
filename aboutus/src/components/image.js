import React, { Component } from 'react';
import './image.css'
const Image = (props) => {
  const { imageSource, paragraph } = props;
  return (
    <div className="container">
      <img src={imageSource} style={{ width: "100%" }} />
      <div className="bottom-left"><p className='paragraph'>{paragraph}</p></div>
    </div>
  );
}

export default Image; 