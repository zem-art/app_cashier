import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    height: '25%',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#318fff',
    marginBottom: 10,
  },
  text: {
    fontSize: 13,
    color: '#a9a9',
  },
  pactImage: {
    height: '40%',
    // borderWidth: 1,
    paddingVertical: 35,
  },
  inIcon: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: 200,
    width: 200,
    // borderWidth: 1,
    alignItems: 'center',
  },
  icon: {
    height: '100%',
    width: '100%',
  },
  Bottom: {
    marginTop: 25,
    height: 100,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  inBottom: {
    // borderWidth: 1,
    backgroundColor: '#318fff',
    borderRadius: 15,
    height: '50%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBottom: {
    fontSize: 20,
    color: '#FFFF',
  },
});

export {styles};
