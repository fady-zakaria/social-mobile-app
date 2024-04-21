import {
  View,
  Pressable,
  FlatList,
  ActivityIndicator,
  ScrollView,
  Text,
} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import Post from '../../components/Post/Post';
import {dummydata} from '../../dummyData';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import Comment from '../../components/Comment/Comment';
import styles from './PostDetails.style';
import {comments} from '../../types/comments';
import {useGetComments} from '../../hooks/useGetComments';
import {useSelector} from 'react-redux';

interface Iprops {}

const PostDetails: FC<Iprops> = ({}) => {
  const navigation = useNavigation();

  const {post} = useSelector(state => state.postsState);
  console.log('Post Details', post.id);

  const [queryRes, setQueryRes] = useState<comments>([]);

  const {
    data,
    refetch,
    isRefetching,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
  } = useGetComments(post.id);

  useEffect(() => {
    let newArray: comments = [];
    data?.pages.map(item => {
      newArray = [...newArray, ...item];
    });
    setQueryRes(newArray);
  }, [data]);

  console.log('comments', data);

  const emptyList = () => {
    return (
      <View>
        <Text>No Comments</Text>
      </View>
    );
  };

  const HeaderList = () => {
    return (
      <>
        <Pressable onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name="chevron-left"
            color={'blue'}
            size={30}
          />
        </Pressable>
        <Post post={post} />
      </>
    );
  };

  return (
    <View style={styles.commentContainer}>
      {isRefetching && isLoading ? (
        <ActivityIndicator size={50} color={'black'} />
      ) : (
        <FlatList
          data={queryRes}
          renderItem={({item}) => <Comment comment={item} />}
          keyExtractor={index => index.toString()}
          showsVerticalScrollIndicator={false}
          onEndReached={() => fetchNextPage()}
          onEndReachedThreshold={0.6}
          onRefresh={() => refetch()}
          refreshing={isRefetching}
          ListEmptyComponent={emptyList()}
          ListHeaderComponent={HeaderList()}
        />
      )}
      {isFetchingNextPage && (
        <View>
          <ActivityIndicator size={30} color={'black'} />
        </View>
      )}
    </View>
  );
};

export default PostDetails;
