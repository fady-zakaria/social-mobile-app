import {View, FlatList, ActivityIndicator, Text} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import Post from '../../components/Post/Post';
import Comment from '../../components/Comment/Comment';
import styles from './PostDetails.style';
import {comments} from '../../types/comments';
import {useGetComments} from '../../hooks/useGetComments';
import {useAppSelector} from '../../redux/store';

interface Iprops {}

const PostDetails: FC<Iprops> = ({}) => {
  const {post} = useAppSelector(state => state.postsState);

  const [queryRes, setQueryRes] = useState<comments>([]);

  const {
    data,
    refetch,
    isRefetching,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
  } = useGetComments(post?.id);

  useEffect(() => {
    let newArray: comments = [];
    data?.pages.map(item => {
      console.log(item, 'item');
      if (item) {
        newArray = [...newArray, ...item.data];
      }
    });
    setQueryRes(newArray);
  }, [data]);

  console.log('comments', data);

  const emptyList = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text>No Comments</Text>
      </View>
    );
  };

  const HeaderList = () => {
    return <Post post={post} backButton={true} />;
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
