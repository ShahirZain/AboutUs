import React, { Component } from 'react'
import './whoWeAre.css'



class whoWeAre extends Component {
  render() {
    return (
      <div className="main">
        <div className="card card--tatecool_page slick-slide slick-current slick-active" style={{'width': '200px' }} tabIndex="-1" role="option" aria-describedby="slick-slide00" data-slick-index="0" aria-hidden="false">
          <div className="card__inner">
            <div className="card-media card-media--image">
              <div className="card-media__inner responsive-container">
                <a href="/about-us/history-tate" data-gtm-name="card_link_image" data-gtm-destination="landing-page" tabindex="0">
                  <div className="responsive-container__outer-sizer" style={{ 'max-width': '4800px' ,'margin': '0 auto'}}>
                    <div className="responsive-container__sizer" style= {{'--aspect-ratio': '100/57.2292', '--aspect-ratio-percentage':'57.2292%'}} >
                      <img alt="" />
                      <noscript><img src="https://www.tate.org.uk/sites/default/files/styles/width-170/public/gallery_nine_1950scrop_1_1.jpg" alt="" /></noscript>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="card-content ">
              <div className="card-content__inner">
                <h3 className="card__title">
                  <a href="/about-us/history-tate" data-gtm-name="card_link_title" data-gtm-destination="landing-page" tabIndex="0">
                    <span className="card__title--maintitle card__title--tatecool-page">History of Tate</span>
                  </a>
                </h3>
                <div className="card__description">Find out about the history of our four galleries and the people behind it</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default whoWeAre
