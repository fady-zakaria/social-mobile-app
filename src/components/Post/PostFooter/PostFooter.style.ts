import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/Colors';

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'column',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // padding: 5,
  },
  reactionsContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    marginStart: 5,
    borderBottomColor: Colors.lightgrey,
    borderBottomWidth: 1,
    paddingBottom: 15,
  },
  reactionIcon: {
    height: 20,
    width: 20,
  },
  reactionCount: {
    color: Colors.grey,
    fontSize: 14,
    paddingLeft: 5,
  },
  reactContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    // backgroundColor: Colors.lightgrey,
    // borderColor: '#000000',
    // borderTopWidth: 1,
  },
  actionWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionTitle: {
    fontSize: 14,
    marginStart: 5,
    color: Colors.grey,
  },
  likedStyle: {
    color: Colors.primaryColor,
    fontWeight: 'bold',
  },
});

export default styles;
