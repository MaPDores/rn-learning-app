import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';

import store from './reducers/store';

import Home from './view/containers/home';

import customTheme from './view/custom-theme';

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={customTheme}>
          <Home/>
      </PaperProvider>
    </StoreProvider>
  );
}
