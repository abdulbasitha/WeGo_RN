/**
 * @format
 */

import {AppRegistry} from 'react-native';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import SplashScreen from './screens/SplashScreen';
import Main from './Main';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Main);
