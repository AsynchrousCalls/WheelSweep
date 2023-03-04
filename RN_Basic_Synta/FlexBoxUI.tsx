

import React, { useState } from 'react';

import {
  
  StyleSheet,
  Text,
  
  View,
} from 'react-native';


function FlexBoxUI() {
  
  return(
  
    <View style={styles.body}>
    
    <View style={styles.main}>
    <View style={styles.View1}>
      <Text style={styles.text}>1</Text>
    </View>
    <View style={styles.View2}>
      <Text style={styles.text}>2</Text>
    </View>
    <View style={styles.View3}>
      <Text style={styles.text}>3</Text>
    </View>
    </View>

    <View style={styles.submain}>
    <View style={styles.View4}>
      <Text style={styles.text}>4</Text>
    </View>
    <View style={styles.View5}>
      <Text style={styles.text}>5</Text>
    </View>
    </View>

    <View style={styles.thirdmain}>
    <View style={styles.View6}>
      <Text style={styles.text}>6</Text>
    </View>
    <View style={styles.View7}>
      <Text style={styles.text}>7</Text>
    </View>
    </View>
    







  </View>
  )
   
}

const styles = StyleSheet.create({

  body:{
    flex:1,
    backgroundColor:"grey",

  },
  main:{
    flex:2,
    flexDirection:"row",
    justifyContent:"space-evenly",
    
  },
  View1:{
    flex:1,
    backgroundColor:"#00ffff",
    alignItems:"center",
    justifyContent:"center"

    
    
  },
  View2:{
    flex:2,
    backgroundColor:"blue",
    alignItems:"center",
    justifyContent:"center"
   
  },
  View3:{
    flex:5,
    backgroundColor:"purple",
    alignItems:"center",
    justifyContent:"center"
    
    
  },
  submain:{
    flex:3,
    flexDirection:"column",

  },
  View4:{
    flex:1,
    backgroundColor:"red",
    alignItems:"center",
    justifyContent:"center"

  },
  View5:{
    flex:1,
    backgroundColor:"green",
    alignItems:"center",
    justifyContent:"center"

  },
  thirdmain:{
    flex:15,
    flexDirection:"row",

  },
  View6:{
    flex:1,
    backgroundColor:"white",
    alignItems:"center",
    justifyContent:"center"

  },
  View7:{
    flex:1,
    backgroundColor:"blue",
    alignItems:"center",
    justifyContent:"center"

  },

  text:{
    
    fontSize:23,
    color:"black",
    fontWeight:"bold"
  }
 
})

export default FlexBoxUI;
