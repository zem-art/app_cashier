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
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    paddingHorizontal: 10,
    alignItems: 'center',
    paddingVertical: 10,
  },
  inbody: {
    // borderWidth: 1,
    height: 50,
    marginVertical: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderBottomColor: '#a9a9',
    borderBottomWidth: 1,
  },
  text: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 15,
  },
  pactKlik: {
    height: 80,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  klik: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#29abe2',
    borderRadius: 10,
  },
  textSend: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffff',
  },
});

export {styles};
