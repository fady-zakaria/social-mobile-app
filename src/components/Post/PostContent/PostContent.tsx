import {View, Text} from 'react-native';
import React, {FC} from 'react';
import styles from './PostContent.style';

interface Iprops {
  postTitle: string;
  postBody: string;
}

const PostContent: FC<Iprops> = ({postTitle, postBody}) => {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.contentTitle}>{postTitle}</Text>
      <Text style={styles.contentBody}>{postBody}</Text>
    </View>
  );
};

export default PostContent;
