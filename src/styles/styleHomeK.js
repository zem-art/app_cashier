import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  header: {
    // borderWidth: 1,
    height: 65,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  Title: {
    color: '#F9C900',
    fontSize: 20,
    fontWeight: 'bold',
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
  body: {
    // borderWidth: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 20,
  },
  inBody: {
    // borderWidth: 1,
    height: 100,
    width: '44%',
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff',
    elevation: 8,
    marginVertical: 10,
  },
  icon: {
    height: 45,
    width: 45,
    marginBottom: 10,
  },
  iconTitle: {
    height: 25,
    width: 25,
  },
});

export {styles};
