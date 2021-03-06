import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    height: 60,
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#29abe2',
  },
  back: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
  body: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    // borderWidth: 1,
  },
  inbody: {
    height: '70%',
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
    backgroundColor: '#29abe2',
    // borderWidth: 1,
  },
  Picker: {
    height: 50,
    width: 200,
    marginTop: 10,
    borderRadius: 10,
    color: '#ffffff',
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15.5,
  },
  pacTouchable: {
    height: 70,
    width: '100%',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: 10,
  },
  klik: {
    // borderWidth: 1,
    height: 50,
    width: '80%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#29abe2',
  },
  textSend: {
    fontSize: 18,
    color: '#ffff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffff',
  },
});

export {styles};
