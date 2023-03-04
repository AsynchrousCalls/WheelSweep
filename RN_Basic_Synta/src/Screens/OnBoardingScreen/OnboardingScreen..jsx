import { Text, View ,FlatList, Image, Animated, StyleSheet} from 'react-native'
import React, { Component,useState,useRef } from 'react'
import onBoardData from './onBoardData'
import OnboardingItem from './OnboardingItem .'
import Paginator from './Paginator'
const  OnboardingScreen=()=> {
  const [current,setCurrent]=useState(0);
  const scrollX=useRef(new Animated.Value(0)).current;
  const slidesRef=useRef(null);
  const viewableItemsChanged=useRef(({viewableItems})=>{
    setCurrent(viewableItems[0].index)
  }).current;
  const  viewCongfig=useRef({viewAreaCoveragePercentThreshold:50}).current;
    return (
    <View style={styles.container}>
        <View style={{flex:3}}>
        <FlatList
        data={onBoardData}
        renderItem={({item})=><OnboardingItem item={item}/> }
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces={false}
        keyExtractor={(item)=>item.id}
        onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}] ,{
          useNativeDriver:false,
        })}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewCongfig}
        ref={slidesRef}
        />
      </View>
      <Paginator data={onBoardData} scrollX={scrollX} />
    </View>
    )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"

  },
  
})
export default OnboardingScreen