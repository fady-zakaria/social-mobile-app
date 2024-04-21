import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/Colors';

const styles = StyleSheet.create({
  avatarContainer: {
    backgroundColor: Colors.borderGrey,
    marginTop: 2,
  },
  commentContainer: {
    flexDirection: 'row',
    // backgroundColor: Colors.white,
    marginVertical: 10,
    // borderColor: '#000000',
    // borderWidth: 4,
    // padding: 10,
    width: '80%',
  },
  contentContainer: {
    marginStart: 10,
  },
  contentWrapper: {
    padding: 10,
    flexDirection: 'column',
    backgroundColor: Colors.lightgrey,
    borderRadius: 15,
  },
  userName: {
    fontSize: 16,
    color: Colors.textColor,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  commentBody: {
    fontSize: 16,
    color: Colors.textColor,
    marginEnd: 10,
  },
  commentTime: {
    paddingStart: 10,
    marginTop: 5,
    fontSize: 14,
    color: Colors.textGrey,
  },
});

export default styles;
