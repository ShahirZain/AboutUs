import React from 'react';
import './image2.css'
const Image2 = (props) => {
    const   {imageSource,project,discription,link,button,height}=props;
    return (  

<div className="row">
  <div className="column">
    <div className="card">
      <img src={imageSource} alt="Image" style={{width:'100%', height:{height}}} className='image' />
      <div className="container">
        <h2>{project}</h2>
        <p>{discription}</p>
        <p>{link}</p>
        <p><button className="button">{button}</button></p>
      </div>
    </div>
  </div>
  </div>
      );
}
 
export default Image2;