import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import image from './HealthyHeaderbkgrd.png'


export const NavContainer = styled.div`
  background-image: url(${image});
  background-size: cover;
  border-bottom: 1px solid black;
`

export const NavRow = styled.div`
  max-width: 1400px;
  padding: 10px 0;
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  margin: 0 auto;
`
export const NavLeft = styled.div`
  width: 32%;
`
export const NavMiddle = styled.div`
  width: 36%;
  text-align: center;
`
export const NavRight = styled.div`
  width: 32%;
  text-align: right;
`

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
`