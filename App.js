import React, { Component, useState,useEffect } from 'react';
import 'react-native-gesture-handler';
import { Alert, StyleSheet,TouchableOpacity, Text, View, Touchable,Button, TextInput } from 'react-native';

import Screen2 from './Screens/Screen2';
import Screen1 from './Screens/Screen1';
import Options from './Screens/Options';
import VF_VT from './VF_VT/VF_VT';
import  VF_VT2 from './VF_VT/VF_VT2';
import CPR_Start from './Screens/CPR_Start';

import {createAppContainer}from 'react-navigation';
import {createStackNavigator}from 'react-navigation-stack';
import {createSwitchNavigator}from 'react-navigation';
//import Screen2 from './Screens/Screen2';


export default class App extends React.Component{
  render(){  
    return(
      
    <AppContainer/>
    );
    
    
  } 
  
}
const AppSwitherVF = createSwitchNavigator({
  VF_VT:{
    screen:VF_VT
  },
  VF_VT2:{
    screen:VF_VT2
  }
},{
  initialRouteName: "VF_VT"
})
const AppNavigator = createStackNavigator({
  Home:{
    screen:Screen2,
    
  },
  Options:{ 
    screen:Options
  },
  CPR_Start:{
    screen:CPR_Start
  },

  Screen1:{
    screen:Screen1
  },
  VF:AppSwitherVF
  
    
},
{
  initialRouteName: "Home",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#8ed1fc',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    
  }
}
);
const AppContainer = createAppContainer(AppNavigator);
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
