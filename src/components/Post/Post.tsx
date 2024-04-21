import {View, Pressable} from 'react-native';
import React, {FC} from 'react';
import styles from './Post.style';
import {PostType} from '../../types/posts';
import PostHeader from './PostHeader/PostHeader';
import PostContent from './PostContent/PostContent';
import PostFooter from './PostFooter/PostFooter';
import {useNavigation} from '@react-navigation/native';
import MainStackScreenNames from '../../navigations/stacks/MainStack/MainStackScreenNames';
import {useDispatch} from 'react-redux';
import {setPost} from '../../redux/features/PostsSlice';

interface Iprops {
  post: PostType;
}

const Post: FC<Iprops> = ({post}) => {
  const dispatch = useDispatch();

  const postPressHandler = () => {
    dispatch(setPost(post));
    navigation.navigate(MainStackScreenNames.postDetails);
  };

  const navigation = useNavigation();
  return (
    <Pressable onPress={() => postPressHandler()}>
      <View style={styles.postContainer}>
        <PostHeader />
        <PostContent postTitle={post.title} postBody={post.body} />
        <PostFooter />
      </View>
    </Pressable>
  );
};

export default Post;
