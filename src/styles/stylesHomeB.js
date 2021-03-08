import {StyleSheet} from 'react-native';

const stylesB = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  header: {
    // borderWidth: 1,
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    borderBottomColor: '#F9C900',
    borderBottomWidth: 2,
  },
  header1: {
    // borderWidth: 1,
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderBottomColor: '#F9C900',
    borderBottomWidth: 2,
    justifyContent: 'space-between',
  },
  title: {
    color: '#F9C900',
    fontSize: 20,
    fontWeight: 'bold',
  },

  body: {
    // borderWidth: 1,
    // height: 150,
    paddingHorizontal: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 5,
  },
  inBody: {
    height: 100,
    width: '44%',
    // borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 9,
  },
  icon: {
    height: 40,
    width: 40,
    marginBottom: 5,
  },
  exit: {height: 25, width: 25},
});

export {stylesB};
