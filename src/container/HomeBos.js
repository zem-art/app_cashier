import React, {Component} from 'react';
import {Text, View, StatusBar, Image} from 'react-native';
import {stylesB} from '../styles/stylesHomeB';
import {connect} from 'react-redux';
import BodyHomeB from '../components/BodyHomeB';

export class HomeBos extends Component {
  render() {
    return (
      <View style={stylesB.container}>
        <StatusBar backgroundColor="#F9C900" />
        <View style={stylesB.header}>
          <Text style={stylesB.title}> Dashboard </Text>
        </View>
        <View style={stylesB.body}>
          <BodyHomeB navigation={this.props.navigation} />
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userData: state,
  };
};
export default connect(mapStateToProps)(HomeBos);
