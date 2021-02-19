import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  header: {
    borderWidth: 1,
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  body: {
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  inBody: {
    height: 70,
    width: '100%',
    borderBottomWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    marginVertical: 5,
    paddingLeft: 10,
  },
  pactHitung: {
    flexDirection: 'row',
    marginTop: 10,
  },
  inHitung: {
    height: 70,
    // borderWidth: 1,
    width: '45%',
    borderBottomWidth: 1,
    marginHorizontal: 10,
  },
  bottom: {
    height: 70,
    paddingHorizontal: 30,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inBottom: {
    height: 50,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 10,
  },
  picker: {
    height: 70,
    width: '100%',
  },
});

export {styles};
