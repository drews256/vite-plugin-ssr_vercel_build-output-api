import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import CssBaseline from '@mui/material/CssBaseline';
import Event from '../pages/event';
import ResponsiveAppBar from './components/responsive-app-bar';
import * as styles from './styles.ts';

const theme = createTheme({
  palette: {
    primary: { main: '#30496C', light: '#75C9C8', dark: '#4677bd', contrastText: '#fff' },
    secondary: { main: '#607466', light: '#607466', dark: '#607466' },
    text: { primary: '#2D1E2F', secondary: '#2D1E2F' },
    background: { default: '#f2eee9', paper: '#f5f5f5' },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <CssBaseline />
            <styles.Header>
              <ResponsiveAppBar />
            </styles.Header>
            <styles.Body>
              <Event />
            </styles.Body>
          </LocalizationProvider>
      </ThemeProvider>
    </>
  )
}

export default App
