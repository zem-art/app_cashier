import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';

import Intro from '../screen/auth/Intro';
import Splash from '../screen/Splash';
import Login from '../screen/auth/login';
import Register from '../screen/auth/Register';
import Otp from '../screen/auth/otp';
import NoPhone from '../screen/auth/NoPhone';
import BottomTab from './BottomTab';
import AddSaldo from '../screen/AddSaldo';
import Price from '../screen/Price';
import SaldoAdd from '../screen/sucssesSaldo';
import Forgot from '../screen/auth/forgot';
import Succes from '../screen/succes';
import ScanQr from '../screen/ScanQr';
import QrCode from '../screen/QrCode';
import ProfileStaf from '../container/ProfileStaf';
import AddBuyer from '../screen/addBuyer';
import AddBarang from '../screen/addBarang';
import Stock from '../screen/Stock';
import AddSupllaier from '../screen/addSupllaier';
import ItemDetail from '../screen/ItemDetail';
import EditBarang from '../screen/EditBarang';
import SucsessAdd from '../screen/sucsessAdd';
import SucssesEdit from '../screen/sucssesEdit';
import AddBrand from '../screen/addBrand';
import AddCategory from '../screen/AddCategory';
import DataPembeli from '../screen/DataPembeli';
import DetailP from '../screen/DetailP';
import TopUp from '../screen/TopUp';
import TopUpScan from '../screen/TopUpScan';
import SucssesTopUp from '../screen/SucssesTopUp';
import ScanTopUp from '../screen/ScanTopUp';
import AddCart from '../screen/addCart';
import ScanInAdd from '../screen/ScanInAdd';
import MyCart from '../screen/mYCart';
import DeleteId from '../screen/HeaderMyCart';
import CheckOut from '../screen/CheckOut';
import PaySaldo from '../screen/PaySaldo';
import AddPurcase from '../screen/Report/PurchaseReport';
import SalesReport from '../screen/Report/SalesReport';
import LossReport from '../screen/Report/LossReport';
import SucssesMonth from '../screen/Sucsses/sucssesMonth';
import Spending from '../screen/Report/SpendingReport';
import AddSpending from '../screen/Report/addSpending';
import ReportMont from '../screen/Report/ReportPurcasemonth';

const Stack = createStackNavigator();

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      splash: true,
    };
  }

  getDataStore = async () => {
    try {
      AsyncStorage.multiGet([
        'token',
        'nama',
        'qr_code',
        'nomor',
        'kodeMember',
        'verifid',
        'role',
        'id',
        'email',
        // 'address',
        // 'age',
        'image',
      ]).then((value) => {
        this.props.userToken(value[0][1]);
        this.props.nameUser(value[1][1]);
        this.props.userQrcode(value[2][1]);
        this.props.numberUser(value[3][1]);
        this.props.kodeUser(value[4][1]);
        this.props.userVerifed(value[5][1]);
        this.props.userRole(value[6][1]);
        this.props.userId(value[7][1]);
        this.props.userEmail(value[8][1]);
        this.setState({splash: false});
      });
    } catch (err) {
      console.log('Eror Get Store', err);
      this.setState({splash: false});
    }
  };

  componentDidMount() {
    setTimeout(() => {
      this.getDataStore();
    }, 6000);
  }

  render() {
    if (this.state.splash) {
      return <Splash />;
    }
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {this.props.userData.userReducer.verivic === '' ||
          this.props.userData.userReducer.verivic === null ? (
            <>
              <Stack.Screen
                name="Intro"
                component={Intro}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Register"
                component={Register}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Otp"
                component={Otp}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="NoPhone"
                component={NoPhone}
                options={{headerShown: false}}
              />
            </>
          ) : (
            <Stack.Screen
              name="BottomTab"
              component={BottomTab}
              options={{headerShown: false}}
            />
          )}
          <Stack.Screen
            name="AddSaldo"
            component={AddSaldo}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ResponM"
            component={Price}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SuccsesAdd"
            component={SaldoAdd}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Forgot"
            component={Forgot}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Succses"
            component={Succes}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Scan Qr"
            component={ScanQr}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Qr Code"
            component={QrCode}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Edit Profil"
            component={ProfileStaf}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddBuyer"
            component={AddBuyer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddStock"
            component={AddBarang}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="StockGudang"
            component={Stock}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddSupllaier"
            component={AddSupllaier}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Detail"
            component={ItemDetail}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Submit"
            component={EditBarang}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SucsessAdGoods"
            component={SucsessAdd}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SucsseEdit"
            component={SucssesEdit}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddBrand"
            component={AddBrand}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddCategory"
            component={AddCategory}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Pembeli"
            component={DataPembeli}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DetailPembeli"
            component={DetailP}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TopUp"
            component={TopUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TopUpScan"
            component={TopUpScan}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SucssesTop"
            component={SucssesTopUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ScanTopUp"
            component={ScanTopUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddCart"
            component={AddCart}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="InAdd"
            component={ScanInAdd}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Cart"
            component={MyCart}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DeleteId"
            component={DeleteId}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SucssesCart"
            component={CheckOut}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PaySaldo"
            component={PaySaldo}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddPurcase"
            component={AddPurcase}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Salesreport"
            component={SalesReport}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Loosreport"
            component={LossReport}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Month"
            component={SucssesMonth}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Spending"
            component={Spending}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddSpending"
            component={AddSpending}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ReportPurcaseMont"
            component={ReportMont}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userData: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userId: (id) => dispatch({type: 'SET_ID', payload: id}),
    userVerifed: (verifed) => dispatch({type: 'SET_VERIVIC', payload: verifed}),
    kodeUser: (kode) => dispatch({type: 'SET_KODE', payload: kode}),
    nameUser: (name) => dispatch({type: 'SET_NAME', payload: name}),
    numberUser: (data) => dispatch({type: 'SET_NUMBER', payload: data}),
    userQrcode: (qr) => dispatch({type: 'SET_QRCODE', payload: qr}),
    userRole: (role) => dispatch({type: 'SET_ROLE', payload: role}),
    userToken: (token) => dispatch({type: 'SET_USER', payload: token}),
    userImage: (avatar) => dispatch({type: 'SET_IMAGE', payload: avatar}),
    userEmail: (email) => dispatch({type: 'SET_EMAIL', payload: email}),
    userAddress: (alamat) => dispatch({type: 'SET_ADDRESS', payload: alamat}),
    userAge: (umur) => dispatch({type: 'SET_AGE', payload: umur}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
