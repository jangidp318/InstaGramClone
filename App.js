import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import PhotoFeed from './src/components/PhotoFeed';
import { Provider } from 'react-redux';
import {  applyMiddleware } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk'


export default class App extends React.Component{
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header title="Instagram" />
          <PhotoFeed />
        </View>
      </Provider>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
