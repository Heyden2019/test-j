import { grey, lime, red, yellow } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900],
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        color: lime[200],
        backgroundColor: lime[900],
        borderRadius: 10,
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: lime[800],
        },
      },
    },
    MuiCircularProgress: {
      colorPrimary: {
        color: red[700],
        margin: '10px',
      },
    },
    MuiCard: {
      root: {
        padding: 1,
        backgroundColor: grey[200],
        borderRadius: 15,
        boxShadow: 'none',
      },
    },
    MuiGrid: {
      root: {
        marginTop: 10,
        marginBottom: 10,
      },
    },
    MuiLink: {
      root: {
        color: yellow[400],
      },
      button: {
        color: yellow[400],
      },
    },
  },
});
