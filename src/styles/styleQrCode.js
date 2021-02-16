import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9C900',
  },
  header: {
    // borderWidth: 1,
    height: 50,
    backgroundColor: '#F9C900',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    height: '100%',
    width: '100%',
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    // borderWidth: 1,
  },
  qrcode: {
    borderRadius: 10,
    backgroundColor: '#ffff',
    height: 250,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  kode: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '70%',
    // borderWidth: 1,
    alignSelf: 'center',
    marginBottom: 10,
    backgroundColor: '#ffff',
    borderRadius: 10,
  },
  textKode: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export {styles};
