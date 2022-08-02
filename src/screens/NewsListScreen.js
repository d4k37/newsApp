import React  from 'react'
import {View, StyleSheet, } from 'react-native'
import Card from '../components/Card'
import Header from '../components/Header'

const NewsListScreen  = props => {
    return(
        
         <Card navigation={props.navigation} />
        
    )
}

const styles = StyleSheet.create ({
    
})

export default NewsListScreen