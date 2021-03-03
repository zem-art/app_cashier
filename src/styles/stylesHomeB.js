import {StyleSheet} from 'react-native';

const stylesB = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  header: {
    borderWidth: 1,
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  title: {
    color: '#F9C900',
    fontSize: 20,
    fontWeight: 'bold',
  },
  // bodyProfil: {
  //   height: 60,
  //   borderWidth: 1,
  //   justifyContent: 'center',
  //   paddingHorizontal: 20,
  // },
  body: {
    borderWidth: 1,
    // height: 150,
    paddingHorizontal: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 5,
  },
  inBody: {
    height: 100,
    width: '44%',
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export {stylesB};
