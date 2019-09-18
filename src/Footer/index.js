import React from 'react';
import { 
  FooterContainer, 
  FooterRow,
  Link 
} from './style'
import Facebook from './Facebook.png'
import Instagram from './Instagram.png'
import Twitter from './Twitter.png'

const Footer = ({ routes = [] }) => {
  return (
    <FooterContainer>
      <FooterRow>
        <div className="footer">
          <a href="https://www.facebook.com/LosAngelesFoodPolicyCouncil"><img src={`${Facebook}`} id="socialMedia" alt="Facebook"/></a>
          <a href="https://twitter.com/GoodFoodLA"><img src={`${Twitter}`} id="socialMedia" alt="Facebook"/></a>
          <a href="https://www.instagram.com/lagoodfood/"><img src={`${Instagram}`} id="socialMedia" alt="Facebook"/></a>
          <div id="copyright">
            Copyright © 2019 Los Angeles Food Policy Council. All Rights Reserved
          </div> 
        </div>
      </FooterRow>
    </FooterContainer>
  )
}

export default Footer;