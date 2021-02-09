import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9C900',
    // backgroundColor: '#ffffff',
  },
  body: {
    borderWidth: 1,
    height: '30%',
  },
  icon: {
    height: '100%',
    width: '100%',
    // borderWidth: 1,
  },
  pactIcon: {
    height: '85%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    margin: 10,
    alignSelf: 'center',
  },
  version: {
    alignSelf: 'center',
    height: 30,
    // borderWidth: 1,
  },
  textVersion: {
    fontSize: 15,
    color: '#ffffff',
  },
});

export {styles};
