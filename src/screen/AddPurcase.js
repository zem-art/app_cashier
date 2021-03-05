import React, {Component} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles/styleAllBos';
import {connect} from 'react-redux';
import DatePicker from 'react-native-datepicker';
import axios from 'axios';

export class AddPurcase extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      to: new Date().toISOString().substr(0, 10),
      from: new Date(new Date().setDate(new Date().getDate() - 31))
        .toISOString()
        .substr(0, 10),
    };
  }

  postDate = async () => {
    axios({
      url: 'https://project-mini.herokuapp.com/api/laporan-pembelian',
      method: 'POST',
      headers: {
        Authorization: `Bearer${this.props.userData.userReducer.token}`,
      },
      data: {
        tAwal: this.state.from,
        tAkhir: this.state.to,
      },
    })
      .then((result) => {
        console.log('Succsse==', result.data);
        this.setState({loading: false, data: result.data.data});
      })
      .catch((err) => {
        console.log('ERororor==', err);
        this.setState({data: []});
      });
  };

  render() {
    const sekarang = new Date().toISOString().substr(0, 10);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Laporan Pembeli</Text>
        </View>
        <View style={styles.date}>
          <View style={styles.inDate}>
            <Text style={styles.text1}>Out Of Date</Text>
            <DatePicker
              date={this.state.from}
              mode="date"
              format="YYYY-MM-DD"
              showIcon={false}
              maxDate={sekarang}
              onDateChange={(from) => this.setState({from: from})}
            />
          </View>
          <View style={styles.inDate}>
            <Text style={styles.text2}>Till Date</Text>
            <DatePicker
              date={this.state.to}
              mode="date"
              format="YYYY-MM-DD"
              showIcon={false}
              maxDate={sekarang}
              onDateChange={(toDate) => this.setState({to: toDate})}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => this.postDate()}>
            <Text>Get Date</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.body}>
          {this.state.data.map((i) => {
            return (
              <View style={styles.inbody}>
                <Text>{i.nama_barang}</Text>
              </View>
            );
          })}
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
export default connect(mapStateToProps)(AddPurcase);
