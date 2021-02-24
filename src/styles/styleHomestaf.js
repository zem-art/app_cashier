import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  contsianer: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  title: {
    // color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  header: {
    // borderWidth: 1,
    height: 50,
    // backgroundColor: '#F9C900',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  homeProfile: {
    height: 70,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: '#F9C900',
    // borderRadius: 10,
  },
  icon: {
    // borderWidth: 1,
    height: 50,
    width: '17%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  loading: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconGo: {
    height: 23,
    width: 23,
  },
  body: {
    paddingVertical: 10,
    // height: 150,
    // borderWidth: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingHorizontal: 10,
    // width: '100%',
  },
  bottomHeader: {
    // borderWidth: 1,
    width: '44%',
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 10,
    elevation: 8,
    backgroundColor: '#ffff',
  },
  iconKlik: {
    height: 40,
    width: 40,
    marginBottom: 5,
  },
  iconHeader: {
    height: 25,
    width: 25,
  },
  iconProfil: {
    height: 45,
    width: 45,
    borderRadius: 50,
  },
  bottom: {
    height: 50,
  },
});

export {styles};
