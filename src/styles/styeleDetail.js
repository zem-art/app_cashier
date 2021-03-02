import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    // borderWidth: 1,
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
    backgroundColor: '#29abe2',
  },
  back: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
  title: {
    color: '#ffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    // borderWidth: 1,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#29abe2',
  },
  inBody: {
    // borderWidth: 1,
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#ffff',
    paddingHorizontal: 15,
  },
  bottom: {
    // borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  barcode: {
    height: 55,
    width: '90%',
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    borderWidth: 1,
  },
  inBottom: {
    // borderWidth: 1,
    height: 70,
    marginVertical: 5,
  },
  data: {
    borderWidth: 1,
  },
  inBody1: {
    marginVertical: '3%',
    borderBottomWidth: 1,
    // borderBottomColor: '#a9a9',
  },
  iconBody: {
    height: 30,
    width: 30,
  },
  pactBody: {
    marginTop: '7%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pactModal: {
    flex: 1,
    backgroundColor: '#a9a9',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  inModal: {
    backgroundColor: '#ffff',
    height: '30%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  inModalQr: {
    height: 70,
    width: '100%',
  },
  pactBack: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
  backinModal: {
    height: 50,
    width: 50,
  },
  pactKlik: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  inKlik: {
    height: 50,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#29abe2',
  },
  textSend: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export {styles};
