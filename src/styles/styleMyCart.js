import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  header: {
    height: 60,
    // borderWidth: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#29abe2',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ffffff',
  },
  body: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    // borderWidth: 1,
  },
  icon: {
    height: 25,
    width: 25,
    marginRight: 15,
  },
  inData: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  delete: {
    height: 50,
    width: 50,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inBody: {
    // borderWidth: 1,
    height: 150,
    width: '100%',
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    elevation: 9,
  },
  pactName: {
    flexDirection: 'row',
    // borderWidth: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textName: {
    color: '#a9a9',
    fontWeight: 'bold',
    fontSize: 15,
    marginRight: 10,
  },
  data: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  inHeader: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  icondelete: {
    height: 25,
    width: 25,
  },
  inItem: {
    // borderWidth: 1,
    height: 70,
    width: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    height: 65,
    // borderWidth: 1,
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#29abe2',
  },
  inBottom: {
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
});

export {styles};
