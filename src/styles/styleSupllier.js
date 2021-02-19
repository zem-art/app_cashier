import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    // borderWidth: 1,
    height: 60,
    alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
    backgroundColor: '#29abe2',
  },
  title: {
    fontSize: 20,
    color: '#ffff',
    fontWeight: 'bold',
  },
  body: {
    height: 250,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  inbody: {
    // borderWidth: 1,
    height: 180,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: '#29abe2',
  },
  input: {
    // borderWidth: 1,
    width: '100%',
    borderRadius: 10,
    maxHeight: 130,
    marginTop: 10,
    backgroundColor: '#ffffff',
    paddingLeft: 20,
    paddingRight: 20,
  },
  textSupllaier: {
    fontWeight: 'bold',
    color: '#ffff',
    fontSize: 20,
  },
  pactKlik: {
    height: 80,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  klik: {
    // borderWidth: 1,
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#29abe2',
    borderRadius: 10,
  },
  textKlik: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffff',
  },
});

export {styles};
