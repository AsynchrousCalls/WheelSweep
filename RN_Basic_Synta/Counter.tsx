import { View, StyleSheet,Text,Button } from 'react-native'
import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const onAdd=()=>setCount(count+1);
    const onReset=()=>setCount(0);
    const onMinus=()=>{if(count>0){setCount(count-1)}};

   

  return (
    <View style={styles.body}>
      <Text style={styles.test}>{count}</Text>
      <Button  title='Add' onPress={onAdd}></Button>
      
      <Button  title='Reset' onPress={onReset}></Button>
      
      <Button  title='Minus' onPress={onMinus}></Button>

      <Text>You Click {count} Times</Text>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
    body:{
      
      
      backgroundColor:"grey",
      borderRadius:6,
      margin:12,
      justifyContent:"center",
      alignItems:"center",
      paddingVertical:34,
     
    },
    test:{
      color:"#ffff",
      fontSize:25,
      fontWeight:"bold"
    },
    
   
  });