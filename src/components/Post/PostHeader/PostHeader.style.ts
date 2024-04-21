import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/Colors';

const styles = StyleSheet.create({
  postHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 16,
  },
  headerTextContainer: {
    flexDirection: 'column',
    marginStart: 10,
  },
  postHeaderText: {
    fontSize: 16,
    color: Colors.textColor,
  },
  timeText: {
    fontSize: 14,
    color: Colors.textGrey,
  },
  avatarContainer: {
    backgroundColor: Colors.borderGrey,
  },
  backBtn: {
    marginEnd: 5,
  },
  timeContainer: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
});

export default styles;
