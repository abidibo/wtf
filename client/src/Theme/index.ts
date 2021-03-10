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
})

export default theme
