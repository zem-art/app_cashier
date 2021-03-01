import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9C900',
  },
  container2: {
    flex: 1,
    backgroundColor: '#29abe2',
    // opacity: 0.2,
  },
  header: {
    // borderWidth: 1,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
  },
  bottom: {
    marginVertical: 30,
    height: 100,
    // borderWidth: 1,
    paddingHorizontal: 20,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  klik: {
    height: 45,
    width: 45,
    // borderWidth: 1,
  },
  backinModal: {
    height: 35,
    width: 35,
  },
  Modal: {
    backgroundColor: '#a9a9',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.9,
    paddingHorizontal: 40,
  },
  inModa: {
    height: 350,
    width: '100%',
    // borderWidth: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  ininModal: {
    // borderWidth: 1,
    width: '100%',
    borderRadius: 10,
    marginVertical: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#a9a99a',
  },
  iconInModal: {
    height: 50,
    width: 50,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleModal: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
});

export {styles};
