// Packages
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

// Styles
import { GlobalStyle } from 'styles/global';
import { defaultTheme } from 'styles/theme/default';
import 'react-toastify/dist/ReactToastify.css';

// Contexts
import { BarbecueContextProvider } from 'contexts/useBarbecueContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BarbecueContextProvider>
        <GlobalStyle />
        <Component {...pageProps} />
        <ToastContainer autoClose={3000} />
      </BarbecueContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
