import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import MainStackScreens from './stacks/MainStack/MainStack';
import {setNavigationRef} from '../redux/features/NavigationSlice';
import {useDispatch} from 'react-redux';

const Navigation = () => {
  const dispatch = useDispatch();
  const navigationRef = useNavigationContainerRef();
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        dispatch(setNavigationRef(navigationRef));
      }}>
      <MainStackScreens />
    </NavigationContainer>
  );
};

export default Navigation;
