import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    min-height: 100vh;
    padding: 0;

    * {
      box-sizing: border-box;
    }
  }

  body {
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d2cbdd' fill-opacity='0.31' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
    display: flex;
    flex-direction: column;
  }

  #app {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  a {
    cursor: pointer;
  }
`

export default GlobalStyle
