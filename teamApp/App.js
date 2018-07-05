import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome Matt!</Text>
        <View style={styles.boxContainer}>
          <View style={styles.chatDiv}>
            <Text>Chat Div</Text>
          </View>
          <View style={styles.scheduleDiv}>
            <Text>Schedule Div</Text>
          </View>
          <View style={styles.managerDiv}>
            <Text>Manager Div</Text>
          </View>
          <View style={styles.bugsDiv}>
            <Text>Bugs Div</Text>
          </View>
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
  boxContainer: {
    flex: 1,
  },
  chatDiv: {
    flex: 1,
    backgroundColor: 'blue',
  },
  scheduleDiv: {
    width: '100%',
    flex: 1,
    backgroundColor: 'lightblue',
  },
  managerDiv: {
    width: '100%',
    flex: 1,
    backgroundColor: 'green',
  },
  bugsDiv: {
    width: '100%',
    flex: 1,
    backgroundColor: 'orange',
  }
});
