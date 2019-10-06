import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Language from './src/modules/auth/language/Language'
import Home from './src/modules/auth/home/Home'
import Login from './src/modules/auth/login/Login'

const AppNavigator = createStackNavigator({
  Language: { screen: Language },
  Home: {screen: Home},
  Login: {screen: Login}
},{
  headerMode: 'none',
  initialRouteName: 'Language'
});

 const App = createAppContainer(AppNavigator);



export default App;
