import React, {Component} from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';
import {StyleSheet} from 'react-native';

import HomeM from '../container/HomeM';
import HomeStaf from '../container/HomeStaf';
import HomeKasir from '../container/HomeKasir';
import HomeBos from '../container/HomeBos';
import MeMember from '../container/MeMember';
import Profile from '../container/Profile';
import ProfileBos from '../container/ProfileAdmin';
// import ScanQr from '../screen/ScanQr';

const Tab = createBottomTabNavigator();

class BottomTab extends Component {
  render() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#000000',
          inactiveTintColor: '#a9a9a9',
          activeBackgroundColor: '#F9C900',
        }}>
        {this.props.userData.userReducer.role ? (
          this.props.userData.userReducer.role == 1 ? (
            <>
              <Tab.Screen name="HomeBos" component={HomeBos} />
              <Tab.Screen
                name="ProfileA"
                component={ProfileBos}
                options={{
                  tabBarIcon: () => (
                    <Image
                      style={styles.icon}
                      source={require('../assets/icon/iconProfile.png')}
                    />
                  ),
                }}
              />
            </>
          ) : this.props.userData.userReducer.role == 2 ? (
            <>
              <Tab.Screen
                name="Staf"
                component={HomeStaf}
                options={{
                  tabBarIcon: () => (
                    <Image
                      style={styles.icon}
                      source={require('../assets/icon/Home.png')}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                  tabBarIcon: () => (
                    <Image
                      style={styles.icon}
                      source={require('../assets/icon/iconProfile.png')}
                    />
                  ),
                }}
              />
            </>
          ) : this.props.userData.userReducer.role == 3 ? (
            <>
              <Tab.Screen
                name="Cashier"
                component={HomeKasir}
                options={{
                  tabBarIcon: () => (
                    <Image
                      style={styles.icon}
                      source={require('../assets/icon/Home.png')}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                  tabBarIcon: () => (
                    <Image
                      style={styles.icon}
                      source={require('../assets/icon/iconProfile.png')}
                    />
                  ),
                }}
              />
            </>
          ) : this.props.userData.userReducer.role == 4 ? (
            <>
              <Tab.Screen
                name="Home"
                component={HomeM}
                options={{
                  tabBarIcon: () => (
                    <Image
                      style={styles.icon}
                      source={require('../assets/icon/Home.png')}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="Profil"
                component={MeMember}
                options={{
                  tabBarIcon: () => (
                    <Image
                      style={styles.icon}
                      source={require('../assets/icon/Profile.png')}
                    />
                  ),
                }}
              />
            </>
          ) : null
        ) : null}
      </Tab.Navigator>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userData: state,
  };
};
export default connect(mapStateToProps)(BottomTab);

const styles = StyleSheet.create({
  icon: {
    height: 20,
    width: 20,
  },
});
