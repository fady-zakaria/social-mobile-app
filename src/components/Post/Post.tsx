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
  backButton?: boolean;
}

const Post: FC<Iprops> = ({post, backButton = false}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const postPressHandler = () => {
    dispatch(setPost(post));
    navigation.navigate(MainStackScreenNames.postDetails);
  };

  return (
    <Pressable onPress={() => postPressHandler()}>
      <View style={styles.postContainer}>
        <PostHeader backButton={backButton} />
        <PostContent postTitle={post.title} postBody={post.body} />
        <PostFooter />
      </View>
    </Pressable>
  );
};

export default Post;
