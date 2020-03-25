/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
/* More Info : https://techzia.in */
import React, { Component } from "react";
import Splash from './screens/SplashScreen';
import 'react-native-gesture-handler';
import Navigator from './Navigator/AppNavigator';
import { 
    View,
    Text,
    StyleSheet,
    StatusBar
} from "react-native";

class Main extends Component {



    constructor(props){
        super(props);
        this.state = {
            timePassed: false,

        };
    }
    state={
        logginIn:null,
        isLoadingComplete: false
    }
    componentDidMount() {
        setTimeout( () => {
            this.setTimePassed();
        },1000);
        


     
    }
    setTimePassed() {
        this.setState({timePassed: true});
    }
    render() {
        {Platform.OS === "ios" &&     <StatusBar barStyle = "light-content"  backgroundColor="#FFFF" />}
        if (this.state.timePassed==false)
            return <Splash />
            else
            return <Navigator />
        
    }
}
export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});