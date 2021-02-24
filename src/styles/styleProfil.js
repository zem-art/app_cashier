import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
  header: {
    width: '100%',
    height: 60,
    // borderWidth: 1,
    alignItems: 'center',
    // justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
    backgroundColor: '#29abe2',
  },
  icon: {
    height: 30,
    width: 35,
    marginRight: 10,
  },
  title: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  profile: {
    height: 95,
    width: 95,
    borderRadius: 10,
  },
  profil: {
    height: 140,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#29abe2',
  },
  avatar: {
    // borderWidth: 1,
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  body: {
    // borderWidth: 1,
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  input: {
    // borderWidth: 1,
    marginTop: 5,
    borderRadius: 10,
    borderBottomWidth: 1,
  },
  inbody: {
    // borderWidth: 1,
    // paddingHorizontal: 5,
    marginVertical: 5,
  },
  klik: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
    // borderWidth: 1,
  },
  pactKlik: {
    height: 50,
    width: '100%',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#29abe2',
  },
  bottom: {
    height: 50,
  },
  textBottom: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ffffff',
  },
});

export {styles};
