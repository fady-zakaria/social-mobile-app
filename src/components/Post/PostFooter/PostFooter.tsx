import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {FC, useState} from 'react';
import styles from './PostFooter.style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../../utils/Colors';
import {heart, like, shock} from '../../../utils/imgs';
import MainStackScreenNames from '../../../navigations/stacks/MainStack/MainStackScreenNames';
import {useNavigation} from '@react-navigation/native';
import {setPost} from '../../../redux/features/PostsSlice';
import {useDispatch} from 'react-redux';
import {PostType} from '../../../types/posts';

interface Iprops {
  post: PostType;
}

const PostFooter: FC<Iprops> = ({post}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [noOFlikes, setNoOFLikes] = useState(50);
  const [liked, setLiked] = useState(false);

  const likeHandler = () => {
    if (liked) {
      setNoOFLikes(noOFlikes - 1);
    } else {
      setNoOFLikes(noOFlikes + 1);
    }
    setLiked(!liked);
  };

  const commentHandler = () => {
    dispatch(setPost(post));
    navigation.navigate(MainStackScreenNames.postDetails);
  };

  return (
    <View style={styles.footerContainer}>
      <View style={styles.reactionsContainer}>
        <Image source={like} style={styles.reactionIcon} />
        <Image source={shock} style={styles.reactionIcon} />
        <Image source={heart} style={styles.reactionIcon} />
        <Text style={styles.reactionCount}>{noOFlikes}</Text>
      </View>

      <View style={styles.reactContainer}>
        <TouchableOpacity
          onPress={() => likeHandler()}
          style={styles.actionContainer}>
          <View style={styles.actionWrapper}>
            {liked ? (
              <AntDesign name="like1" size={20} color={Colors.primaryColor} />
            ) : (
              <AntDesign name="like2" size={20} />
            )}
            <Text style={[styles.actionTitle, liked && styles.likedStyle]}>
              Like
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => commentHandler()}
          style={styles.actionContainer}>
          <View style={styles.actionWrapper}>
            <Ionicons name="chatbox-outline" size={24} />
            <Text style={styles.actionTitle}>Comment</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostFooter;
