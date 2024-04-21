import {View} from 'react-native';
import React, {FC, useEffect} from 'react';
import {useNavigation, StackActions} from '@react-navigation/native';
import MainStackScreenNames from '../../navigations/stacks/MainStack/MainStackScreenNames';
import styles from './SplashScreen.style';
import LottieView from 'lottie-react-native';

interface Iprops {}

const SplashScreen: FC<Iprops> = ({}) => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace(MainStackScreenNames.home));
    }, 5000);
  }, []);

  return (
    <View style={styles.splashContainer}>
      <LottieView
        source={require('../../assets/animations/splash.json')}
        style={styles.splash}
        autoPlay
        loop={false}
      />
    </View>
  );
};

export default SplashScreen;
