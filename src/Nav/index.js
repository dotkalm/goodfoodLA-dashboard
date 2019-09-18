import React from 'react';
import { 
  NavContainer, 
  NavRow, 
  NavRight, 
  NavMiddle, 
  NavLeft,
  Link 
} from './style'
import image from './LOGO.png';

const Nav = ({ routes = [] }) => {
  return (
    <NavContainer color={"white"} >
      <NavRow>  
        <NavLeft>
          <div className="dashboard">
            <a href="https://www.goodfoodla.org"><img src={`${image}`} id="logo" alt="logo"/></a>
            <div id="dashboardText">
              <span id="dashboardText"><br/>Food <br/>System<br/>Dashboard</span>
            </div>
          </div>
        </NavLeft>
        <NavMiddle>
          {
            routes.map((route, i) =>
              <Link key={i} exact to={`/${route}`}>{route}</Link>
            )
          }
        </NavMiddle>
        <NavRight>
          <a id="lafpcLink" href="https://www.goodfoodla.org">LAFPC Home</a>
        </NavRight>
      </NavRow>
    </NavContainer>
  )
}

export default Nav;