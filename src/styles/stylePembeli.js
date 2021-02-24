import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  header: {
    // borderWidth: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#29abe2',
  },
  back: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  title: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  body: {
    // borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  inbody: {
    // borderWidth: 1,
    height: 155,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 9,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iinBody: {
    paddingHorizontal: 50,
  },
  ininBody: {
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
    height: 30,
    width: '100%',
    // marginBottom: 5,
    flexDirection: 'row',
  },
  Pact: {
    alignSelf: 'flex-end',
    height: 30,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  PactEditDelete: {
    flexDirection: 'row',
    height: 30,
    // borderWidth: 1,
    width: '100%',
    justifyContent: 'flex-end',
    marginVertical: 5,
    // marginTop: 5,
  },

  delete: {
    height: 20,
    width: 20,
  },
  colorDetail: {
    color: '#0000ff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  colorKet: {
    color: '#a9a9',
    fontSize: 15,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  isloading: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export {styles};
