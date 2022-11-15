
import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
  
const theme = responsiveFontSizes(createTheme({
    typography: {
      fontFamily: [   
        'Roboto',
        'Raleway',
        'Open Sans',
        'sans-serif',
      ].join(','),
      h1: {
        fontSize: '5rem',
        fontFamily: 'Raleway',
      },
      h2: {
        fontSize: '3.5rem',
        fontFamily: 'Open Sans',
        fontStyle: 'bold',
      },
      h3: {
        fontSize: '2.5rem',
        fontFamily: 'Roboto',
      },
      h4: {
        fontSize: '2.5rem',
        fontFamily: 'Raleway',
        color: '#00e676',
      },
    },
    palette: {
      background: {
        default: '#e0e0e0'//green
      },
      primary: {
        main: '#00e676',//indigo
        contrastText: 'white'
      },
      secondary: {
        main: '#f50057',//pink
      },
      text: {
        primary: '#000000',//black
        secondary: '#000000',//white
      },
    }
}));

export default theme