import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import store from '../redux/store';
import Layout from '../component/General/Layout';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#A00000'
    }
  }
});
  


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </Provider>
    </ThemeProvider>
)
}
export default MyApp