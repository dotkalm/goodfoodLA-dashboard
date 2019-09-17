import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavContainer = styled.div`
  background-color: #A5CC6B;
  border-bottom: 1px solid black;
`

export const NavRow = styled.div`
  max-width: 1400px;
  padding: 10px 0;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`
export const NavLeft = styled.div`
  width: 20%;
`
export const NavMiddle = styled.div`
  width: 60%;
  text-align: center;
`
export const NavRight = styled.div`
  width: 20%;
`
export const Link = styled(NavLink)`
  display:inline-block;
  text-decoration: none;
  padding: 10px;
  text-transform: uppercase;
  color: black;
  &:hover {
    color: white;
  }
  &.active{
    border-bottom: 1px solid black;
  }
  .show > &.active {
    border-bottom: none;
    color: gold;
  }
`