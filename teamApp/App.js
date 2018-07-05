import React from 'react';
import 'App.css';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View className={container} style={styles.container}>
        <Text>Welcome Matt!</Text>
        <View></View>
        <View></View>
        <View></View>
        <View></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
