import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import BottomHeaderM from '../components/BottomHeaderM';
import HeaderUpM from '../components/headerUpM';
import {styles} from '../styles/styleHomeM';

class HomeM extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#F9C900" />
        <ScrollView>
          <HeaderUpM navigation={this.props.navigation} />
          <BottomHeaderM navigation={this.props.navigation} />
          <View style={styles.pactHistory}>
            <Text style={styles.text}>History</Text>
            <TouchableOpacity style={styles.Seeklik}>
              <Text style={styles.see}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.body}>
            <View style={styles.inBody}>
              <Text>Data</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default HomeM;
