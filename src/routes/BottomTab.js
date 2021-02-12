import React, {Component} from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import HomeM from '../container/HomeM';

const Tab = createBottomTabNavigator();

export class BottomTab extends Component {
  render() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#FFFFFF',
          inactiveTintColor: '#a9a9a9',
          activeBackgroundColor: '#7cfc00',
        }}>
        {this.props.userData.userReducer.role ? (
          this.propsuserData.userReducer.role == 1 ? (
            <Tab.Screen name="Home" component={HomeM} />
          ) : null
        ) : null}
      </Tab.Navigator>
    );
  }
}

export default BottomTab;
