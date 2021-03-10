import React from "react";
import LogoImage from '../../Assets/Images/logo_small.png'
import styled from 'styled-components'


const Image = styled.img``

const Logo: React.FC = () => (
  <Image src={LogoImage} alt='WTF' />
);

export default Logo;
