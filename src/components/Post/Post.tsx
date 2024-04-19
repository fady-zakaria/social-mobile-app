import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import React, {FC} from 'react';
import styles from './Post.style';
import {PostType} from '../../types/posts';
import {Avatar} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {Colors} from '../../utils/Colors';

interface Iprops {
  post: PostType;
}

const Post: FC<Iprops> = ({post}) => {
  const postHeader = () => {
    return (
      <View style={styles.postHeaderContainer}>
        <Icon name="rocket" size={30} color="#900" />
        <IconEntypo name="dots-three-horizontal" size={30} color="#900" />
        
        <Avatar
          icon={{name: 'user', type: 'font-awesome'}}
          //   icon={

          //   }
          size={'meduim'}
          rounded
          // title={post.}
          containerStyle={{backgroundColor: '#BDBDBD'}}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.postHeaderText}>Ahmed</Text>
          <Text style={styles.timeText}>just one hour ago</Text>
        </View>
      </View>
    );
  };

  const postContent = () => {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.contentTitle}>{post.title}</Text>
        <Text style={styles.contentBody}>{post.body}</Text>
      </View>
    );
  };

  const postFooter = () => {
    return (
      <View style={styles.footerContainer}>
        <Pressable onPress={() => {}} style={styles.footerTitle}>
          <Text>Like</Text>
        </Pressable>
        <Pressable onPress={() => {}} style={styles.footerTitle}>
          <Text>Comment</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <Pressable onPress={() => {}}>
      <View style={styles.postContainer}>
        {postHeader()}
        {postContent()}
        {postFooter()}
      </View>
    </Pressable>
  );
};

export default Post;
