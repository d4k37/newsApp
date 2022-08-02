import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'
import Card from './src/components/Card'
import * as Font from 'expo-font'
import {AppLoading} from 'expo'
import NewsListScreen from './src/screens/NewsListScreen';
import AppNavigator from './src/navigation/AppNavigator';

 const loadFonts = () => {
  return Font.loadAsync({
    "Ubuntu": require('./assets/fonts/Ubuntu/Ubuntu-Regular.ttf'),
    "Ubuntu-Bold": require('./assets/fonts/Ubuntu/Ubuntu-Bold.ttf')
  })
}

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false)

  // if(!fontLoaded){
  //   return (
  //     <AppLoading
  //     startAsync={loadFonts}
  //     onFinish={()=> setFontLoaded(true)}
  //     />
  //   )
  // }

  return (
        
    <AppNavigator />
          
  );
}

const styles = StyleSheet.create({

});
