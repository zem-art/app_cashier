import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  header: {
    height: '15%',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 10,
    color: '#F9C900',
  },
  title: {
    fontSize: 15,
    color: '#a9a9',
  },
  icon: {
    height: '70%',
    width: '100%',
  },
  body: {
    width: '100%',
    // borderWidth: 1,
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  pactAccount: {
    alignItems: 'center',
    // borderWidth: 1,
    height: '20%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconLogin: {
    height: 30,
    width: 30,
    marginBottom: 5,
  },
  login: {
    height: 85,
    width: 85,
    borderWidth: 1,
    borderColor: '#F9C900',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 25,
  },
  textLogin: {
    color: '#F9C900',
    fontSize: 14,
  },
  register: {
    height: 85,
    width: 85,
    backgroundColor: '#585aa7ff',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 25,
  },
  textRegister: {
    color: '#ffff',
  },
  pactForgot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '10%',
    width: '100%',
    // borderWidth: 1,
  },
  forgot: {
    color: '#F9C900',
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 15,
  },
});

export {styles};
