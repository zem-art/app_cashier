import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#F9C900',
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    // borderWidth: 1,
  },
  inbody: {
    borderWidth: 1,
    margin: 10,
    height: 90,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  date: {
    height: 80,
    borderBottomColor: '#F9C900',
    borderBottomWidth: 2,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inDate: {
    alignItems: 'center',
  },
  text1: {
    color: 'red',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  text2: {
    color: 'green',
    marginBottom: 5,
    fontWeight: 'bold',
  },
});

export {styles};
