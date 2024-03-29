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
// import ProfileBos from '../con?tainer/ProfileAdmin';
import StockLaporan from '../container/StockLaporan';
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
              <Tab.Screen
                name="Dashboard"
                component={HomeBos}
                options={{
                  tabBarIcon: () => (
                    <Image
                      style={styles.icon1}
                      source={require('../assets/icon/Dashboard.png')}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="Stock Toko"
                component={StockLaporan}
                options={{
                  tabBarIcon: () => (
                    <Image
                      style={styles.icon}
                      source={require('../assets/icon/StockIt.png')}
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
  icon1: {
    height: 21,
    width: 21,
  },
});
