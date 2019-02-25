import React, { Component } from 'react';
import GetinTouch from './getInTouch/getInTouch';
import OurService from './ourService/ourService';
import WhoWeAre from './whoWeAre/whoWeAre'
import './App.css';
import  Image2 from './components/image2'


const project1 = () => {
  return(
  <img src={require('./img/1.jpg')} alt="" />
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <img  src={require('./img/title.jpg')} alt="Snow" style={{ 'width': '95vw' , 'height' : '50vh' }}  />
          <div className="centered"><h3>ABOUT <strong> <em> ACTIVEX SOLUTIONS </em></strong></h3>
          <h4>Our mission is to increase the public’s enjoyment and understanding of British art from the 16th century to the present day and of international modern and contemporary art</h4>
          </div>
        </div>
        <h1>WHO WE ARE???</h1>
        <div className="whoWeAre">
        <Image2 imageSource={require('./img/1.jpg')} project='HISTOR OF AXS' discription="Find out history of our galleries" button="VIEW" height='400px'/> 
        <Image2 imageSource={require('./img/3.png')} project='BUSINESS PARTNER' discription="Find out history of our galleries" button="VIEW" height='400px' />
        <Image2 imageSource={require('./img/4.jpg')} project='TECHNOLOGY' discription="Find out history of our galleries" button="VIEW" height='400px'/>
        </div>
        <br  />
        <h1>BUSINESS servICES</h1>
        <Image2 imageSource={require('./img/1.jpg')} project='ZEESHAN KHAN' discription="CEO OF ACTIVEX SOLUTIONS" button="VIEW"/>
        <Image2 imageSource={require('./img/2.jpg')} project='HAMZA SIDDIQUE' discription="DIRECTOR OF TREASURE" button="VIEW"/>
        <Image2 imageSource={require('./img/3.png')} project='SHAHIR ZAIN' discription="EMP" button="VIEW"/>
        <Image2 imageSource={require('./img/4.jpg')} project='SHARIQ ' discription="EMP" button="VIEW"/>
        <Image2 imageSource={require('./img/4.jpg')} project='SHAHZAIB ' discription="EMP" button="VIEW"/>
      </div>
    );
  }
}

export default App;


