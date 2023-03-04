import { StyleSheet, View,useWindowDimensions,Animated } from 'react-native'
import React from 'react'

const Paginator = ({data,scrollX}) => {
    const {width}=useWindowDimensions();
  return (
    <View style={{flexDirection:"row",height:64}}>
      {data.map((_, i)=>{
        
        const inputRange=[(i-1)*width,(i-1)*width,(i-1)*width]
        
        const dotWidth=scrollX.interpolate({
            inputRange,
            outputRange:[10,20,30],
            extrapolate : 'clamp'
        })

        const opacity=scrollX.interpolate({
            inputRange,
            outputRange:[0.2,1,0.5],
            extrapolate : 'clamp'
        })

        return <Animated.View 
        style={[
            styles.dot,
            {
            width:dotWidth,opacity
            }
    ]}

        
        key={i.toString()}/>
      })}
    </View>
  )
}

export default Paginator

const styles = StyleSheet.create({
dot:{
    height:12,
    borderRadius:5,
    backgroundColor:"black",
    marginHorizontal:8,
    
}

})