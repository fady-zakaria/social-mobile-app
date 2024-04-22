import React, {FC, useEffect, useState} from 'react';
import Post from '../../components/Post/Post';
import {FlatList, Image, View} from 'react-native';
import styles from './Home.style';
import {logo} from '../../utils/imgs';
import {useGetPosts} from '../../hooks/useGetPosts';
import {posts} from '../../types/posts';
import Loader from '../../components/Loader/Loader';

interface Iprops {}

const Home: FC<Iprops> = ({}) => {
  const [queryRes, setQueryRes] = useState<posts>([]);

  const {
    data,
    refetch,
    isRefetching,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
  } = useGetPosts();

  useEffect(() => {
    let newArray: posts = [];
    data?.pages.map(item => {
      if (item) {
        newArray = [...newArray, ...item?.data];
      }
    });
    setQueryRes(newArray);
  }, [data]);

  return (
    <View>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logoStyle} />
      </View>
      {isRefetching || isLoading ? (
        <Loader />
      ) : (
        <FlatList
          data={queryRes}
          renderItem={({item}) => <Post post={item} />}
          keyExtractor={index => index.toString()}
          showsVerticalScrollIndicator={true}
          onEndReached={() => fetchNextPage()}
          onEndReachedThreshold={0.6}
          onRefresh={() => refetch()}
          refreshing={isRefetching}
        />
      )}
      {isFetchingNextPage && <Loader />}
    </View>
  );
};

export default Home;
