import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    borderBottomWidth: 2,
    height: 60,
    justifyContent: 'center',
    borderBottomColor: '#F9C900',
    paddingLeft: 10,
  },
  title: {
    color: '#F9C900',
    fontWeight: 'bold',
    fontSize: 20,
  },
  body: {
    padding: 10,
  },
  inbody: {
    height: 150,
    // borderWidth: 1,
    width: '98%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: '#ffffff',
    elevation: 5,
  },
  pactData: {
    height: 80,
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingLeft: 15,
    paddingRight: 1,
    marginTop: 5,
  },
  data: {
    height: 70,
    width: '44%',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#ffff',
    elevation: 5,
    margin: 5,
  },
  klik: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 5,
    // borderWidth: 1,
  },
  qrcode: {
    height: 25,
    width: 25,
  },
  text: {
    color: '#a9a9a9',
    fontSize: 15,
    fontWeight: 'bold',
  },
  pactName: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export {styles};
