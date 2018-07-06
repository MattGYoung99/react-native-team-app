import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BugsNav from './components/bugsComponents/BugsNav.js';
import ChatNav from './components/chatComponents/ChatNav.js';
import ManagerNav from './components/managerComponents/ManagerNav.js';
import ScheduleNav from './components/scheduleComponents/ScheduleNav.js';

///Users/matthewyoung/react-native-team-app/teamApp/components/bugsComponents/BugsNav.js

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome Matt!</Text>
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
