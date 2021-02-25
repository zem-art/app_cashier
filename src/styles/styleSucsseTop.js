import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    // borderWidth: 1,
    backgroundColor: '#29abe2',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ffff',
    fontSize: 19,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  body: {
    height: 130,
    backgroundColor: '#29abe2',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: 30,
  },
  inbody: {
    height: 80,
    backgroundColor: '#ffffff',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: 10,
  },
  icon: {
    height: 80,
    width: 80,
  },
  bottom: {
    // borderWidth: 1,
    paddingHorizontal: 20,
    // paddingVertical: 10,
  },
  inBottom: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#a9a9a9',
    // borderWidth: 1,
    marginTop: 10,
  },
  pactKlik: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    flexDirection: 'row',
  },
  inKlik: {
    // borderWidth: 1,
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#29abe2',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  pactText: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  textq: {
    color: '#29abe2',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export {styles};
