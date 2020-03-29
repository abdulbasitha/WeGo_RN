import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle = "light-content"  backgroundColor="#FFFF" />
        <Text style={styles.textProp}>WeGo</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121921',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textProp: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 38,
    textAlign: 'center',
    color: '#314256',
  },
});
