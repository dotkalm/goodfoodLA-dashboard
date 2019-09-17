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
    <NavContainer color={"white"}>
      <NavRow>
        <NavLeft>
        </NavLeft>
        <NavMiddle>
          {
            routes.map(route =>
              <Link exact to={`/${route}`}>{route}</Link>
            )
          }
        </NavMiddle>
        <NavRight>
        </NavRight>
      </NavRow>
    </NavContainer>
  )
}

export default Nav;