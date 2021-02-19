import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import {styles} from '../styles/styleHomestaf';
import {connect} from 'react-redux';
import HomeStaff from '../components/HeaderStaff';
import ProfileAdmin from '../components/ProfileAdmin';
import BodyHomeS from '../components/bodyHomeStaff';

export class HomeStaf extends Component {
  render() {
    // console.log('Ini Data Redux==', this.props.userData.userReducer);
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#F9C900" />
        <ScrollView>
          <HomeStaff navigation={this.props.navigation} />
          <View style={styles.homeProfile}>
            <ProfileAdmin navigation={this.props.navigation} />
          </View>
          <View style={styles.body}>
            <BodyHomeS navigation={this.props.navigation} />
          </View>
          <View>
            <Text>body</Text>
          </View>
          <View style={styles.bottom} />
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userData: state,
  };
};
export default connect(mapStateToProps)(HomeStaf);
