import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();

import Intro from '../screen/Intro';
import Splash from '../screen/Splash';
import Login from '../screen/auth/login';
import Register from '../screen/auth/Register';
import Otp from '../screen/auth/otp';
import NoPhone from '../screen/auth/NoPhone';

export class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      splash: true,
    };
  }

  getDataStore = async () => {
    try {
      AsyncStorage.multiGet([
        'token',
        'nama',
        'qr_code',
        'nomor',
        'kodeMember',
        'verifid',
        'role',
        'id',
      ]).then((value) => {
        console.log('INI dari Asynstore== ', value);
        this.setState({splash: false});
      });
    } catch (err) {
      console.log('Eror Get Store', err);
      this.setState({splash: false});
    }
  };

  componentDidMount() {
    setTimeout(() => {
      this.getDataStore();
    }, 7000);
  }

  render() {
    if (this.state.splash) {
      return <Splash />;
    }
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <>
            <Stack.Screen
              name="Intro"
              component={Intro}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Otp"
              component={Otp}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="NoPhone"
              component={NoPhone}
              options={{headerShown: false}}
            />
          </>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigation;
