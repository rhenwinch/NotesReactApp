import * as React from 'react';
import {MD3DarkTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import App from './App';
import {Provider} from 'react-redux';
import {store} from '../../data/NoteAppStore';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

const Main = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </Provider>
  );
};

export default Main;
