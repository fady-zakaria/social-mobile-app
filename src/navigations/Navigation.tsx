import React, {useRef, useState} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import MainStackScreens from './stacks/MainStack/MainStack';
import {useAppDispatch} from '../redux/store';
import {setNavigationRef} from '../redux/features/NavigationSlice';
import { useDispatch } from 'react-redux';

const Navigation = () => {
  // const navigationRef = useRef();
  // const [routeName, setRouteName] = useState('');
  const dispatch = useDispatch();
  // console.log('routeName', routeName);
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
