import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainStackScreenNames from './MainStackScreenNames';
import Home from '../../../screens/Home/Home';
import PostDetails from '../../../screens/PostDetails/PostDetails';
import SplashScreen from '../../../screens/SplashScreen/SplashScreen';

const MainStack = createNativeStackNavigator();

const MainStackScreens = () => {
  return (
    <MainStack.Navigator
      initialRouteName={MainStackScreenNames.splash}
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}>
      <MainStack.Screen
        name={MainStackScreenNames.splash}
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name={MainStackScreenNames.home}
        component={Home}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name={MainStackScreenNames.postDetails}
        component={PostDetails}
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
};

export default MainStackScreens;
