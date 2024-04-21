import {View, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import {Skeleton} from '@rneui/themed';

interface Iprops {}

const PostSkeleton: FC<Iprops> = ({}) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.skeletonHeader}>
        <Skeleton circle width={40} height={40} />
        <View style={styles.skeletonText}>
          <Skeleton circle width={90} height={10} />
          <Skeleton circle width={90} height={10} />
        </View>
      </View>
      <Skeleton width={'100%'} height={120} />
    </View>
  );
};

export default PostSkeleton;

const styles = StyleSheet.create({
  postContainer: {
    marginVertical: 5,
    padding: 20,
  },
  skeletonHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  skeletonText: {
    flexDirection: 'column',
    marginStart: 10,
    gap: 10,
  },
});
