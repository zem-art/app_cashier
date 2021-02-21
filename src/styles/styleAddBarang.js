import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  header: {
    // borderWidth: 1,
    height: 60,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#29abe2',
    flexDirection: 'row',
  },
  back: {
    height: 30,
    width: 30,
    marginRight: 15,
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    // borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  inBody: {
    height: 70,
    width: '100%',
    borderBottomWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    marginVertical: 5,
    paddingLeft: 10,
    borderBottomColor: '#a9a9',
    marginTop: 15,
  },
  pactHitung: {
    flexDirection: 'row',

    marginTop: 10,
  },
  textL: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  inHitung: {
    height: 70,
    // borderWidth: 1,
    width: '45%',
    borderBottomWidth: 1,
    marginHorizontal: 10,
    borderBottomColor: '#a9a9',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  pactInHitung: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    // borderWidth: 1,
  },
  textRP: {
    marginRight: 5,
    // borderWidth: 1,
  },
  bottom: {
    height: 70,
    paddingHorizontal: 30,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inBottom: {
    height: 50,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#29abe2',
  },
  picker: {
    height: 70,
    width: '100%',
  },
  textKlik: {
    color: '#ffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  isloading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {styles};
