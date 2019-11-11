import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {     
      main: '#ff4400',
    },
    secondary: {
      main: '#7f001f',
    },
  },
  overrides: {
    MuiInput: {
      // Name of the styleSheet
      underline: {
        '&:hover:not($disabled):before': {
          borderBottom: '1px solid rgba(0, 0, 0, 0.4)'
        },
      },
    },
  },
});