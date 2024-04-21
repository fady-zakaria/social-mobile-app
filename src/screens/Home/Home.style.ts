import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/Colors';

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 16,
    marginBottom: 10,
  },
  logoStyle: {
    resizeMode: 'center',
    height: 48,
    width: 200,
  },
});

export default styles;
