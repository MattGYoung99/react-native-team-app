import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from 'react-navigation';
import Home from './components/home/homeNav';
import ChatStack from './components/home/homeNav';

export default class App extends React.Component {
  render() {
    return (
      <Home/>
    );
  }
}


