import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../styles/styleAddBarang';
import {Picker} from '@react-native-picker/picker';

export class AddBarang extends Component {
  constructor() {
    super();
    this.state = {
      brand: '',
      category: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Barang</Text>
        </View>
        <ScrollView>
          <View style={styles.body}>
            <View style={styles.inBody}>
              <Text>Nama Barang</Text>
              <TextInput placeholder="Text" />
            </View>
            <View style={styles.pactHitung}>
              <View style={styles.inHitung}>
                <Text>Harga Awal</Text>
                <TextInput placeholder="Text" />
              </View>
              <View style={styles.inHitung}>
                <Text>Harga Jual</Text>
                <TextInput placeholder="Text" />
              </View>
            </View>
            <View style={styles.pactHitung}>
              <View style={styles.inHitung}>
                <Text>Stock</Text>
                <TextInput placeholder="Text" />
              </View>
              <View style={styles.inHitung}>
                <Text>Brand</Text>
                <Picker
                  mode="dropdown"
                  selectedValue={this.state.brand}
                  onValueChange={(itemValue) =>
                    this.setState({brand: itemValue})
                  }>
                  <Picker.Item label="Pilih" value="0" />
                  <Picker.Item label="Nike" value="1" />
                  <Picker.Item label="Adidas" value="2" />
                </Picker>
              </View>
            </View>
            <View style={styles.inBody}>
              <Picker
                mode="dropdown"
                selectedValue={this.state.brand}
                style={styles.picker}
                onValueChange={(itemValue) =>
                  this.setState({merek: itemValue})
                }>
                <Picker.Item label="Pilih" value="0" />
                <Picker.Item label="Makanan" value="1" />
                <Picker.Item label="Minuman" value="2" />
              </Picker>
            </View>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity style={styles.inBottom}>
              <Text>Klik</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default AddBarang;
