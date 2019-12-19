import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


export const FooterContainer = styled.div`
  background: #156272;
  border-top: 1px solid black;
  /* margin-top: auto; */
  /* position: absolute; */
  /* width: 100%;
  bottom: 0; */

  @media (min-width: 1920px) { 
    height: 8vh;
    bottom: 0;
    width: 100%;
    position: relative;
  }
  @media (min-width: 4000px) {
    height: 4vh;
    bottom: 0;
    width: 100%;
    position: relative;
  }
`;

export const FooterRow = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 100px;;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
`;

export const Link = styled(NavLink)`
  display:inline-block;
  text-decoration: none;
  padding: 15px;
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