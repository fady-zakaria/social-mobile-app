import {useInfiniteQuery} from '@tanstack/react-query';
import getPosts from '../services/posts.service';
// import {Alert} from 'react-native';

export const useGetPosts = () => {
  const query = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['posts'],
    queryFn: async pageParam => await getPosts(pageParam, 20),
    getNextPageParam: (lastPage, allPages) => allPages.length + 1,
    getPreviousPageParam: (firstPage, allPages) => allPages.length - 1,
  });
  return {
    ...query,
  };
};
