import React from "react"
import styled from "styled-components"
import { FlexRowJBetweenACenter, Colors } from "../../Theme/Ui"

const Wrapper = styled.footer`
  background-color: ${Colors.lightGray};
  padding: 1rem 1.5rem;
  text-align: center;
`

const Footer: React.FC = () => (
  <Wrapper>WTF © 2021 - abidibo</Wrapper>
)

export default Footer
