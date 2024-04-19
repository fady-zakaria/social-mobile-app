import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/Colors';

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: Colors.white,
    margin: 17,
    // borderColor: '#000000',
    // borderWidth: 4,
    padding: 10,
  },

  postHeaderContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  headerTextContainer: {
    flexDirection: 'column',
    marginStart: 10,
  },
  postHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.black,
  },
  timeText: {
    fontSize: 10,
    color: Colors.black,
  },

  contentContainer: {
    flexDirection: 'column',
    marginStart: 5,
    marginBottom: 16,
  },
  contentTitle: {
    marginBottom: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.black,
  },
  contentBody: {
    fontSize: 16,
    color: Colors.black,
    marginEnd: 10,
  },

  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  footerTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: Colors.lightgrey,
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.black,
    borderColor: '#000000',
    borderTopWidth: 1,
  },
});

export default styles;
