import React, { Component } from 'react';
import './App.css';
import  Image2 from './components/image2'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <img  src={require('./img/title.jpg')} alt="Snow" style={{ 'width': '100%' , 'height' : '50vh' }}  />
          <br/>  <br/>
          <br/>
          <div className="centered"><h3>ABOUT <strong> <em> ACTIVEX SOLUTIONS </em></strong></h3> <br/>
          <h4>Our mission is to increase the public’s enjoyment and understanding of British art from the 16th century to the present day and of international modern and contemporary art</h4>
          </div>
        </div>
        <h1>WHO WE ARE???</h1>
        <div className="whoWeAre">
        <Image2 imageSource={require('./img/1.jpg')} project='HISTOR OF AXS' discription="Find out history of our galleries" button="VIEW" columnName="row"/> 
        <Image2 imageSource={require('./img/3.png')} project='BUSINESS PARTNER' discription="Find out history of our galleries" button="VIEW" columnName="row" />
        <Image2 imageSource={require('./img/4.jpg')} project='TECHNOLOGY' discription="Find out history of our galleries" button="VIEW" columnName="row"/>
        </div>
        <br />
        <h1>OUR SENIOR STAFF</h1>
        <div className="Staffs" >
        <Image2 imageSource={require('./img/1.jpg')} project='ZEESHAN KHAN' discription="CEO OF ACTIVEX SOLUTIONS" button="VIEW"/>
        <Image2 imageSource={require('./img/2.jpg')} project='HAMZA SIDDIQUE' discription="DIRECTOR OF TREASURE" button="VIEW"/>
        <Image2 imageSource={require('./img/3.png')} project='SHAHIR ZAIN' discription="EMP" button="VIEW"/>
        <Image2 imageSource={require('./img/4.jpg')} project='SHARIQ ' discription="EMP" button="VIEW"/>
        </div>
        <Image2 imageSource={require('./img/4.jpg')} project='SHAHZAIB ' discription="EMP" button="VIEW" columnName="rowShahzaib"/>
      </div>
    );
  }
}

export default App;


