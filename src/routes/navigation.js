import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Intro from '../screen/Intro';
import Splash from '../screen/Splash';
import Login from '../screen/auth/login';
import Register from '../screen/auth/Register';

export class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      splash: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      null;
    }, 3000);
  }

  render() {
    if (this.state.splash) {
      <>
        <Splash />
      </>;
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
          </>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigation;
