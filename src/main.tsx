import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { createTheme, ThemeProvider } from '@mui/material';

import App from './App.tsx';
import { store } from './store/config.ts';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
