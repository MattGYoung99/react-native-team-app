import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ChatScreen from '../screens/chatScreen';
import { createStackNavigator } from 'react-navigation';


 class ChatNav extends React.Component {
    render() {
        return (
            <View style={styles.quarterDiv}>
                <Icon name='ios-chatboxes' color="#fff" size={90}/>
                <Button title='Chat' onPress={()=>navigation.navigate('ChatScreen')} />
            </View>
        )
    }
}

 class ScheduleNav extends React.Component {
    render() {
        return (
            <View style={styles.quarterDiv}>
                <Icon name='ios-calendar' color="#fff" size={90}/>
                <Text>Schedule</Text>
            </View>
        )
    }
}

 class BugsNav extends React.Component {
    render() {
        return (
            <View style={styles.quarterDiv}>
                <Icon name='ios-bulb' color="#fff" size={90}/>
                <Text>Suggestions</Text>
            </View>
        )
    }   
}

 class ManagerNav extends React.Component {
    render() {
        return (
            <View style={styles.quarterDiv}>
                <Icon name='ios-construct' color="#fff" size={90}/>
                <Text>Manager</Text>
            </View>
        )
    }
}

 const HomeNavigator = createStackNavigator({
    ChatNav: { screen: ChatScreen},
    ScheduleNav: { screen: ChatScreen },
    ManagerNav: { screen: ChatScreen },
    BugsNav: { screen: ChatScreen}
})


// <View style={styles.topRow}>
// <ChatNav/>
// <ScheduleNav/>
// </View>
// <View style={styles.bottomRow}>
// <ManagerNav/>
// <BugsNav/>
// </View>
export default class Home extends React.Component {
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
        )
    }
  }
  
const styles = StyleSheet.create({
    quarterDiv: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#000000',
        backgroundColor: '#43AD29',
        justifyContent: 'center',
        alignItems: 'center'
    },
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
})


