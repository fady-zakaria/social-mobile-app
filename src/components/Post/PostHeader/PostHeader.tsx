import {View, Text} from 'react-native';
import React, {FC} from 'react';
import styles from './PostHeader.style';
import {Avatar} from '@rneui/themed';
import {
  useNavigationContainerRef,
  useNavigationState,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
interface Iprops {
  // navigation: NativeStackNavigationProp;
}

const PostHeader: FC<Iprops> = ({navigation}) => {
  // const navigationRef = useNavigationContainerRef();
  // const route = navigationRef.getCurrentRoute()?.name;

  // const state = useNavigationState(state => state);

  // console.log('nav route', route);
  // console.log('nav', state);
  return (
    <View style={styles.postHeaderContainer}>
      <Avatar
        icon={{name: 'user', type: 'entypo'}}
        size={38}
        rounded
        containerStyle={styles.avatarContainer}
      />
      <View style={styles.headerTextContainer}>
        <Text style={styles.postHeaderText}>Ahmed</Text>
        <Text style={styles.timeText}>one hour ago</Text>
      </View>
    </View>
  );
};

export default PostHeader;
