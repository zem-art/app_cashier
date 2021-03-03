import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    // borderWidth: 1,
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#29abe2',
    justifyContent: 'space-between',
  },
  back: {
    height: 30,
    width: 30,
  },
  title: {
    color: '#ffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  text: {
    fontWeight: 'bold',
    // color: '#000',
  },
  picker: {
    height: 70,
    width: '100%',
  },
  inbody: {
    height: 70,
    width: '100%',
    // borderWidth: 1,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    marginVertical: 15,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  input: {
    height: 55,
    marginTop: 5,
    // borderWidth: 1,
  },
  pactHitung: {
    flexDirection: 'row',
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  price: {
    // borderWidth: 1,
    width: '47%',
    marginHorizontal: 10,
    borderRadius: 10,
    marginTop: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    marginBottom: 10,
  },
  bottom: {
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    height: 75,
    paddingHorizontal: 50,
  },
  klik: {
    // borderWidth: 1,
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#29abe2',
  },
  textKlik: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export {styles};
