import { createMuiTheme, Theme } from '@material-ui/core/styles'
import { Colors } from './Ui'

const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
  overrides: {
    MuiTypography: {
      h1: {
        marginBottom: "1.5rem",
        fontSize: "2.4rem",
      },
    },
    MuiBreadcrumbs: {
      ol: {
        marginBottom: "1.5rem",
      },
    }
  }
})

export default theme
