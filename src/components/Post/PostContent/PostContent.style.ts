import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/Colors';

const styles = StyleSheet.create({
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
    color: Colors.textColor,
    marginEnd: 10,
  },
});

export default styles;
