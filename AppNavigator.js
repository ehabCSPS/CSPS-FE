import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Language from './src/modules/auth/language/Language';
import Home from './src/modules/auth/home/Home';
import Login from './src/modules/auth/login/Login';
import Register from './src/modules/auth/register/Register';

const AppNavigator = createStackNavigator(
  {
    Language: {screen: Language},
    Home: {screen: Home},
    Login: {screen: Login},
    Register: {screen: Register},
  },
  {
    headerMode: 'none',
    initialRouteName: 'Language',
  },
);

export default createAppContainer(AppNavigator);
