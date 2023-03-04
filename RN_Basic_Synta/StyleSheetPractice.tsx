import { Text, StyleSheet, View, Button } from 'react-native'
import React, { Component } from 'react'

export default class StyleSheetPractice extends Component {
  render() {
    return (
      <View style={styles.body}>
        <View>
        <View style={styles.View1}>
          <Text style={styles.text}></Text>
        </View>
        <View style={styles.View1}>
          <Text style={styles.text}></Text>
        </View><View style={styles.View1}>
          <Text style={styles.text}></Text>
        </View>
        </View>
       
       
      </View>
    )
  }
}

const styles = StyleSheet.create({

    body:{
      flex:1,
      backgroundColor:"black",

        
       

        

    },
    View1:{
      flex:1,
      justifyContent:"flex-start",
      flexDirection:"row"
    },
    View2:{
      flex:1,
      justifyContent:"flex-start",
      flexDirection:"row"
    },
    View3:{
      flex:1,
      justifyContent:"flex-start",
      flexDirection:"row"
    },
    text:{
      fontSize:23,
      color:"black",
      fontWeight:"bold"
    }
   
})