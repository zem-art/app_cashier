import React, {Component} from 'react';
import {Image, Text, View, StatusBar} from 'react-native';
import {styles} from '../styles/styleHomeK';
import ProfileAdmin from '../components/ProfileAdmin';
import BodyHomeK from '../components/bodyHomeK';
import HeaderUpK from '../components/HeaderUpK';

export class HomeKasir extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#F9C900" />
        <View style={styles.header}>
          <HeaderUpK navigation={this.props.navigation} />
        </View>
        <View style={styles.homeProfile}>
          <ProfileAdmin navigation={this.props.navigation} />
        </View>
        <View style={styles.body}>
          <BodyHomeK navigation={this.props.navigation} />
        </View>
      </View>
    );
  }
}

export default HomeKasir;
