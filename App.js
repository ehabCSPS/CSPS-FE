import React from 'react';
import AppNavigator from './AppNavigator';
import {Provider} from 'react-redux';
import store from './src/redux/configureStore';
const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
