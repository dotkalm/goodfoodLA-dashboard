import React from 'react';
import { 
  NavContainer, 
  NavRow, 
  NavRight, 
  NavMiddle, 
  NavLeft,
  Link 
} from './style'

const Nav = ({ routes = [] }) => {
  return (
    <NavContainer color={"white"} >
      <NavRow>
        <NavLeft> 
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