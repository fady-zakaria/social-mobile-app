import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {Avatar} from '@rneui/themed';
import styles from './Comment.style';
import {CommentType} from '../../types/comments';

interface Iprops {
  comment: CommentType;
}

const Comment: FC<Iprops> = ({comment}) => {
  return (
    <View style={styles.commentContainer}>
      <Avatar
        icon={{name: 'user', type: 'entypo'}}
        size={38}
        rounded
        containerStyle={styles.avatarContainer}
      />
      <View style={styles.contentContainer}>
        <View style={styles.contentWrapper}>
          <Text style={styles.userName}>{comment.name}</Text>
          <Text style={styles.commentBody}>{comment.body}</Text>
        </View>
        <Text style={styles.commentTime}>1 hr </Text>
      </View>
    </View>
  );
};

export default Comment;
