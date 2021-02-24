import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import {styles} from '../styles/styleProfile';

import ProfileAdmin from '../components/ProfileAdmin';
import ExitAdminitrator from '../components/exitAdminitrator';

export class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#F9C900" />
        <View style={styles.header}>
          <ProfileAdmin navigation={this.props.navigation} />
        </View>
        <View style={styles.body}>
          <ExitAdminitrator navigation={this.props.navigation} />
        </View>
      </View>
    );
  }
}

export default Profile;
