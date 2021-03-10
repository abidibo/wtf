import React from "react"
import Logo from '../Logo'
import styled from 'styled-components'
import { FlexRowJBetweenACenter, Colors } from '../../Theme/Ui'

const Header = styled(FlexRowJBetweenACenter)`
  background-color: ${Colors.lightGray};
  padding: 1rem 1.5rem;

  img {
    max-height: 50px;
  }
`

const NavBar: React.FC = () => (
  <Header as='header'>
    <Logo />
  </Header>
);

export default NavBar;
