import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  header: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    // borderWidth: 1,
    flexDirection: 'row',
    backgroundColor: '#F9C900',
  },
  body: {
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  inBody: {
    // borderWidth: 1,
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 15,
    elevation: 5,
    backgroundColor: '#ffffff',
    marginTop: 10,
  },
  iinBody: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    borderBottomColor: '#a9a9a9',
    borderBottomWidth: 1,
    marginVertical: 3,
  },
  iconCircle: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
  submit: {
    height: 20,
    width: 20,
  },
});

export {styles};
