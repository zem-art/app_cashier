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
    backgroundColor: '#585aa7ff',
  },
  textLogin: {
    fontSize: 17,
    color: '#ffff',
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
    // borderBottomWidth: 1,
    borderBottomColor: '#585aa7ff',
    width: '100%',
  },
  pass: {
    height: 30,
    width: 30,
  },
  pass1: {
    width: 30,
  },
  pass2: {
    height: 50,
    width: 20,
    marginRight: 10,
  },
  inAccount: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 70,
    borderBottomWidth: 1,
    borderBottomColor: '#585aa7ff',
    // borderWidth: 1,
    width: '100%',
  },
  Bootom: {
    flexDirection: 'row',
    // borderWidth: 1,
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: '#585aa7ff',
    // marginLeft: 10,
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
