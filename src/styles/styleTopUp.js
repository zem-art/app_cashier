import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  header: {
    // borderWidth: 1,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#29abe2',
  },
  Title: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  body: {
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    // borderWidth: 1,
  },
  indata: {
    // borderWidth: 1,
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    borderRadius: 10,
    backgroundColor: '#29abe2',
    marginTop: 10,
  },
  bottom: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  klik: {
    height: 55,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#29abe2',
  },
  icon: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  input: {
    height: 50,
    width: '100%',
    backgroundColor: '#fff',
    // borderBottomColor: '#000000',
    // borderBottomWidth: 1,
    borderRadius: 10,
    paddingLeft: 20,
    marginVertical: 10,
  },
  text: {
    color: '#ffff',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  textSend: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export {styles};
