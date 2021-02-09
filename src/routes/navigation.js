import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Intro from '../screen/Intro';
import Splash from '../screen/Splash';

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
          </>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigation;
