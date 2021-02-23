import React, {Component} from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import {styles} from '../styles/styleHomestaf';

export class BodyHomeS extends Component {
  render() {
    return (
      <>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AddSupllaier')}
          style={styles.bottomHeader}>
          <Image
            style={styles.iconKlik}
            source={require('../assets/icon/addMan.png')}
          />
          <Text>Insert Company</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AddBuyer')}
          style={styles.bottomHeader}>
          <Image
            style={styles.iconKlik}
            source={require('../assets/icon/Buy.png')}
          />
          <Text>Purchase</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AddStock')}
          style={styles.bottomHeader}>
          <Image
            style={styles.iconKlik}
            source={require('../assets/icon/addBOx.png')}
          />
          <Text>Insert Barang</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('StockGudang')}
          style={styles.bottomHeader}>
          <Image
            style={styles.iconKlik}
            source={require('../assets/icon/stokBrang.png')}
          />
          <Text>Stock Available</Text>
        </TouchableOpacity>
      </>
    );
  }
}

export default BodyHomeS;
