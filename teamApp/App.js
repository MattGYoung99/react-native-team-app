import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { BugsNav, ChatNav, ManagerNav, ScheduleNav } from './components/home/homeNav'
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topRow}>
          <ChatNav/>
          <ScheduleNav/>
        </View>
        <View style={styles.bottomRow}>
          <ManagerNav/>
          <BugsNav/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  topRow: {
    flex: 1,
    flexDirection: 'row'
  },
  bottomRow: {
    flex: 1,
    flexDirection: 'row'
  }
});
