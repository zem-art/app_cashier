import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  header: {
    height: 130,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#007dfe',
    backgroundColor: '#F9C900',
  },
  icon: {
    height: '70%',
    width: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  bottomH: {
    height: 150,
    // borderWidth: 1,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#F9C900',
    // elevation: 2,
  },
  inBottom: {
    height: '60%',
    width: '40%',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: '#ff7f50',
    opacity: 0.4,
  },
  Klik: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '90%',
    // borderWidth: 1,
  },
  scan: {
    height: 50,
    width: 50,
  },
  pactHistory: {
    marginTop: 5,
    flexDirection: 'row',
    // borderWidth: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  body: {
    // borderWidth: 1,
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  Seeklik: {
    height: 30,
    width: 70,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  see: {
    color: '#007dfe',
    fontWeight: 'bold',
    fontSize: 15,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  inBody: {
    height: 100,
    width: '100%',
    // borderWidth: 1,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
    paddingTop: 10,
    marginVertical: 5,
  },
});

export {styles};
