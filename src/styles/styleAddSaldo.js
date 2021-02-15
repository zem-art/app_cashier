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
    backgroundColor: '#F9C900',
  },
  body: {
    height: 240,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  inbody: {
    // borderWidth: 1,
    height: '60%',
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
    backgroundColor: '#F9C900',
  },
  image: {
    height: 50,
    width: 120,
    // borderWidth: 1,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  iconBank: {
    height: '100%',
    width: '100%',
  },
  Picker: {
    height: 50,
    width: 150,
    marginBottom: 20,
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
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
    width: '50%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9C900',
  },
  textSend: {
    fontSize: 18,
    color: '#ffff',
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    width: '70%',
    // borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 30,
    borderRadius: 10,
    // backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    // borderBottomColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffff',
  },
  back: {
    height: 50,
    width: 50,
  },
  pactBack: {
    width: '100%',
    // borderWidth: 1,
    paddingLeft: 20,
    justifyContent: 'center',
    marginTop: 100,
  },
  klikBack: {
    height: 70,
    width: 50,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pactNominal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {styles};
