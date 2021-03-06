import React, { useState, useEffect } from "react";
import {
  StatusBar,
  Text,
  View,
  SafeAreaView,
  Button,
  Touchable,
  TouchableOpacity,
  Alert,
  ScrollView,
  TouchableHighlight,
  BackHandler,
  TextInput,
  StyleSheet,
} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

{
  /*import { styles } from "./mystyles";*/
}

export const test = [];
export const text = [];

//setValue(value + 1 - (value / 38).toFixed(0) * 20) counter with reset

export const dateToString = () => {
  return (
    new Date().getFullYear() +
    "/" +
    (new Date().getMonth() + 1) +
    "/" +
    new Date().getDate() +
    " " +
    new Date().getHours() +
    ":" +
    new Date().getMinutes() +
    ":" +
    new Date().getSeconds()
  );
};
export const dateToString_Clock = () => {
  return (
    new Date().getHours() +
    ":" +
    new Date().getMinutes() +
    ":" +
    new Date().getSeconds()
  );
};

export const storeData = async (key, saveText) => {
  try {
    
    let value= JSON.stringify(saveText)
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log("hello");
  }
};

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    //console.log(JSON.parse(value))
    if (value !== null) {
      //functionCallback(value);
     return value
     
    }
  } catch (e) {
    console.log("Error");
    // error reading value
  }
};

export const storeArray = async (key,data,date,ToArray) => {
  try {
    
    ToArray.push({event:data, date:date})
    const jsonValue = JSON.stringify(ToArray);
    
    await AsyncStorage.setItem(key, jsonValue);
    
  } catch (e) {
    console.log("Error");
  }
};

export async function getArray (key, arrayToLoad) {
  try {
    
    const jsonValue = await AsyncStorage.getItem(key);
    
    let temp = jsonValue != null ? JSON.parse(jsonValue) : null;
    arrayToLoad.splice(0, arrayToLoad.length, ...temp); 
    return(temp)
    
  } catch (e) {
    console.log("Error");
    // error reading value
  }
};
export const clearAppData = async function() {
  try {
      const keys = await AsyncStorage.getAllKeys();
      console.log(keys)
      await AsyncStorage.multiRemove(keys);
  } catch (error) {
      console.error('Error clearing app data.');
  }
}
export const ArrayGenerator =()=>{
  let NewArray=[]
  return NewArray
}

export const DefaultContainer = ({ children }) => (
  <SafeAreaView style={styles.container}>{children}</SafeAreaView>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    marginTop: StatusBar.currentHeight,
  },
});


//const [sampleText, changeText] = useState("Empty Text.");

export const EndingCPR = ({ navigation }) => {
  return (
    <DefaultContainer>
      <SafeAreaView style={styles.container2}>
        <View style={styles.bigTextArea}>
          <ScrollView>
            <Text>{test.join("\n")}</Text>
          </ScrollView>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={() => navigation.popToTop()}>
            <View style={styles.blueBox}>
              <Text style={{ color: "#ff0", fontSize: 20, fontWeight: "bold" }}>
                Return to main screen
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("CPRStart")}>
            <View style={styles.blueBox}>
              <Text style={{ color: "#ff0", fontSize: 20, fontWeight: "bold" }}>
                Return to CPR
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </DefaultContainer>
  );
};

const typicalButton = () => <Button title="What is x?" color="#03ff1a" />;

const typicalTextInput = () => <TextInput />;

const typicalNmrInput = () => <TextInput keyboardType={"numeric"} />;
