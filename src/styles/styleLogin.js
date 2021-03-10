import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  header: {
    height: 50,
    // borderWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#4f52ffff',
  },
  pactImage: {
    // borderWidth: 1,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: '100%',
    width: '50%',
  },
  pactAccount: {
    // borderWidth: 1,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  input: {
    // borderWidth: 1,
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    paddingLeft: 20,
    width: '100%',
  },
  pass: {
    height: 25,
    width: 25,
  },
  inAccount: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 70,
    borderBottomWidth: 1,
    // borderWidth: 1,
    borderBottomColor: '#4f52ffff',
    marginVertical: 5,
    width: '100%',
  },
  Bootom: {
    // borderWidth: 1,
    flexDirection: 'row',
    // padding: 10,
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#a9a9a9',
    fontSize: 15,
    fontWeight: 'bold',
  },
  inBottom: {
    height: 30,
    // borderWidth: 1,
    width: '45%',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  inBottom1: {
    height: 50,
    // borderWidth: 1,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#4f52ffff',
    // marginLeft: 10,
  },
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textLogin: {
    color: '#ffffff',
    fontSize: 17,
  },
  forgot: {
    color: '#a9a9',
    fontWeight: 'bold',
    fontSize: 15,
  },
  Register: {
    height: 40,
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textRegister: {
    color: '#4f52ffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  eye: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
});

export {styles};
