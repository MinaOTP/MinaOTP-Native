import React from 'react';
import { Button, View, Text } from 'react-native';
import { 
  StackNavigator,
  TabNavigator,
} from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'MinaOTP',
    headerStyle: {
      backgroundColor: '#0d0d0d',
    },
    headerTintColor: '#fff',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screend</Text>
        {/*<Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />*/}
          <View>
            <Text>NOTHING</Text>
          </View>
      </View>
    );
  }
}

class MinePage extends React.Component {
  static navigationOptions = {
    headerTitle: 'MinaOTP',
    headerStyle: {
      backgroundColor: '#0d0d0d',
    },
    headerTintColor: '#fff',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>MinePage</Text>
        {/*<Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />*/}
      
          <View>
            <Text>NOTHING</Text>
          </View>
      </View>
    );
  }
}

const MainScreenNavigator = TabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({  
        tabBarLabel:'添加',
        tabBarPosition: 'top',
        })
    },
    Certificate: {
        screen: MinePage,
        navigationOptions: ({navigation}) => ({  
        tabBarLabel:'备份',
        tabBarPosition: 'top',
        })
    },
});

const RootStack = StackNavigator({
  Home: {
    screen: MainScreenNavigator,
  }
},{
    initialRouteName: 'Home',
  });

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}