import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    // borderWidth: 1,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6495ed',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  body: {
    height: 200,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  inBody: {
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '70%',
    width: '100%',
    borderRadius: 15,
    paddingHorizontal: 20,
    backgroundColor: '#6495ed',
  },
  text: {
    color: '#Ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  input: {
    // borderWidth: 1,
    marginTop: 10,
    borderRadius: 10,
    width: '100%',
    paddingLeft: 20,
    paddingEnd: 20,
    backgroundColor: '#ffffff',
  },
  bottom: {
    height: 70,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  klik: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    // borderWidth: 1,
    height: 60,
    width: '100%',
    // backgroundColor: '#4b0082',
    borderWidth: 1,
    borderColor: '#6495ed',
    flexDirection: 'row',
  },
  textSend: {
    color: '#6495ed',
    fontSize: 19,
    fontWeight: 'bold',
  },
  icon: {
    height: 25,
    width: 40,
    marginLeft: 10,
  },
});

export {styles};
