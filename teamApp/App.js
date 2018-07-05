import React from 'react';
import 'App.css';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View className={container} style={styles.container}>
        <Text>Welcome Matt!</Text>
        <View className={chatDiv}></View>
        <View className={scheduleDiv}></View>
        <View className={suggestionDiv}></View>
        <View className={managerDiv}></View>
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
