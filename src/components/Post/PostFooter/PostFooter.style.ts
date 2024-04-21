import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/Colors';

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'column',
  },
  reactionsContainer: {
    flexDirection: 'row',
    marginStart: 5,
    borderBottomColor: Colors.lightgrey,
    borderBottomWidth: 1,
    paddingBottom: 10,
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
    marginTop: 10,
  },
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
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
