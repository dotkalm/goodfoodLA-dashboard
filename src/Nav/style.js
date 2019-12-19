import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import image from './HealthyHeaderbkgrd.png'


export const NavContainer = styled.div`
  background-image: url(${image});
  background-size: cover;
  border-bottom: 1px solid black;
  @media (max-width: 414px) { 
    height: 40vh;
  }
  @media (min-width: 1920px) { 
    height: 15vh;
  }
  @media (min-width: 4000px) { 
    height: 8vh;
  }
`;

export const NavRow = styled.div`
  max-width: 1400px;
  padding: 10px 0;
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 414px) { 
    height: 100%;
  }
  @media (min-width: 1920px) { 
    max-width: 1700px;
  }
  @media (min-width: 4000px) { 
    max-width: 3000px;
  }
`;

export const NavLeft = styled.div`
  width: 32%;
  @media (max-width: 414px) { 
    display: block;
    height: 100%;
    padding: 0px;
  }
`;

export const NavMiddle = styled.div`
  width: 36%;
  text-align: center;
  @media (max-width: 414px) { 
    display: block;
    height: 0vh;
    padding: 0px;
  }
`;

export const NavRight = styled.div`
  width: 32%;
  text-align: right;
  @media (max-width: 414px) { 
    display: none;
  }
`;

export const Link = styled(NavLink)`
  display:inline-block;
  text-decoration: none;
  padding: 10px 15px 0 15px;
  text-transform: uppercase;
  color: white;
  font-weight: 600;
  &:hover {
    border-bottom: 2px solid white;
  }
  &.active{
    border-bottom: 2px solid white;
  }
  .show > &.active {
    border-bottom: hidden;
  }
`;