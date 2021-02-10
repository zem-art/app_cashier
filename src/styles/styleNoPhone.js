import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    height: 60,
    backgroundColor: '#F9C900',
    // flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  title: {
    color: '#ffff',
    fontSize: 20,
    alignSelf: 'center',
  },
  body: {
    // borderWidth: 1,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inBody: {
    // borderWidth: 1,
    height: 130,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#F9C900',
    paddingHorizontal: 40,
  },
  input: {
    // borderWidth: 1,
    backgroundColor: '#ffff',
    width: '100%',
    height: 50,
    borderRadius: 10,
    marginTop: 20,
    paddingLeft: 20,
  },
  pactText: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    height: 50,
    width: '100%',
  },
  caution: {
    color: '#a9a9',
    fontSize: 13,
    fontWeight: 'bold',
  },
  send: {
    width: '100%',
    // borderWidth: 1,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  inSend: {
    height: 50,
    backgroundColor: '#F9C900',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  textSend: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ffffff',
  },
  pathBack: {
    // borderWidth: 1,
    marginBottom: 50,
    paddingLeft: 20,
  },
  back: {
    height: 50,
    width: 50,
  },
  klik: {
    borderWidth: 1,
  },
});

export {styles};
