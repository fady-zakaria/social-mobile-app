import React, {FC, useEffect, useState} from 'react';
import Post from '../../components/Post/Post';
import {ActivityIndicator, FlatList, Image, View} from 'react-native';
import styles from './Home.style';
import {logo} from '../../utils/imgs';
import {useGetPosts} from '../../hooks/useGetPosts';
import {posts} from '../../types/posts';

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
      newArray = [...newArray, ...item];
    });
    setQueryRes(newArray);
  }, [data]);

  // const renderItem = item => {
  //   console.log('renderItem', item);
  //   return <Post post={item} />;
  // };

  return (
    <View>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logoStyle} />
      </View>
      {isRefetching && isLoading ? (
        <ActivityIndicator size={50} color={'black'} />
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
      {isFetchingNextPage && (
        <View>
          <ActivityIndicator size={30} color={'black'} />
        </View>
      )}
    </View>
  );
};

export default Home;
