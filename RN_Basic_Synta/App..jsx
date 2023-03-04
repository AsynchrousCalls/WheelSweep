
import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import OnboardingScreen from './src/Screens/OnBoardingScreen/OnboardingScreen.';
function App() {
  return(
  <View style={styles.container}>
    <OnboardingScreen/>
  </View>

  )
   
}



export default App;

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})