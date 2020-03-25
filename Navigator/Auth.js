import {createAppContainer, ScrollView} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../screens/LoginScreen';
import Signup from '../screens/SignUpScreen';


const AppNavigator = createStackNavigator({
    Login,
    Signup
},
{
    defaultNavigationOptions:{
        headerShown: false
    }
}
);
export default createAppContainer(AppNavigator);