import { Text, View,StyleSheet } from 'react-native'
import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f8f8f8',
        paddingTop:20,
        alignItems:'center',
        borderBottomColor:'#ddd',
        borderBottomWidth:2,
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
        margin:13,
    }
})