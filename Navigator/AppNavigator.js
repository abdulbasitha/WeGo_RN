
import {createAppContainer, ScrollView} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import Screens from './Screens';
import Auth from './Auth';


const AppNavigator = createStackNavigator({
   Auth,
  // Screens
},{
    headerMode: "none"
});




export default createAppContainer(AppNavigator);