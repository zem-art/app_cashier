import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    flex: 1,
  },

  header: {
    height: 50,
    backgroundColor: '#00D380',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
  title: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  image: {
    // borderWidth: 1,
    alignItems: 'center',
  },
  icon: {
    height: 120,
    width: 70,
  },
  body: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#00D380',
    flex: 1,
    marginTop: 20,
  },
  pactInput: {
    // borderWidth: 1,
    height: 130,
    alignItems: 'center',
    // backgroundColor: '#00D380',
    paddingTop: 10,
  },
  inInput: {
    // borderWidth: 1,
    height: 100,
    width: '50%',
    paddingHorizontal: 10,
  },
  input: {
    // borderWidth: 1,
    // maxWidth: 15,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 10,
  },
  input1: {
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 10,
  },
  pactKlik: {
    height: 100,
    backgroundColor: '#00D380',
    width: '100%',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 80,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
  klik: {
    // borderWidth: 1,
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#ffff',
  },
  textSend: {
    fontSize: 20,
    color: '#00D380',
    fontWeight: 'bold',
  },
});

export {styles};
