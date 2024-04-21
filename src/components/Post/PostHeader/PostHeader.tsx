import {View, Text, Pressable} from 'react-native';
import React, {FC} from 'react';
import styles from './PostHeader.style';
import {Avatar} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../../utils/Colors';
import Fontisto from 'react-native-vector-icons/Fontisto';

interface Iprops {
  backButton: boolean;
}

const PostHeader: FC<Iprops> = ({backButton = false}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.postHeaderContainer}>
      {backButton && (
        <Pressable onPress={() => navigation.goBack()} style={styles.backBtn}>
          <MaterialCommunityIcons
            name="chevron-left"
            color={Colors.textGrey}
            size={25}
          />
        </Pressable>
      )}
      <Avatar
        icon={{name: 'user', type: 'entypo'}}
        size={38}
        rounded
        containerStyle={styles.avatarContainer}
      />
      <View style={styles.headerTextContainer}>
        <Text style={styles.postHeaderText}>Anonymous User</Text>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>1hr</Text>
          <Fontisto name="world-o" color={Colors.textGrey} size={10} />
        </View>
      </View>
    </View>
  );
};

export default PostHeader;
