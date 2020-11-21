import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from 'src/redux/Store';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from 'src/theme';

export interface IAppProps extends AppProps {}

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
