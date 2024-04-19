// import {View, Text, FlatList} from 'react-native';
// import {dummydata} from '../../dummyData';
import React, {FC} from 'react';
import Post from '../../components/Post/Post';
import {View} from 'react-native';
import {dummydata} from '../../dummyData';

interface Iprops {}

const Home: FC<Iprops> = ({}) => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Post post={dummydata.posts[0]} />
      <Post post={dummydata.posts[1]} />
      <Post post={dummydata.posts[2]} />
    </View>
    // <FlatList
    //   data={dummydata.posts}
    //   renderItem={({item}) => <Item title={item.title} />}
    //   keyExtractor={item => item.id}
    // />
  );
};

export default Home;
