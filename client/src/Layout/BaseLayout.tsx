import React from "react"
import Container from "@material-ui/core/Container"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "../Theme"
import { Colors } from "../Theme/Ui"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import styled from "styled-components"

type BaseLayoutProps = {
  children: React.ReactNode
}

const Main = styled(Container)`
  background: #fff;
  border: 1px solid ${Colors.lightGray};
  flex: 1;
  margin: 2rem 0;
  padding: 2rem;
`

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Navbar />
    <Main maxWidth="lg">
      {children}
    </Main>
    <Footer />
  </ThemeProvider>
)

export default BaseLayout
