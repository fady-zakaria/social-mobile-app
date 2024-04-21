import {useInfiniteQuery} from '@tanstack/react-query';
import getPosts from '../services/posts.service';

export const useGetPosts = () => {
  const query = useInfiniteQuery({
    queryFn: ({pageParam = 1}) => getPosts(pageParam),
    queryKey: ['posts'],
    getNextPageParam: (lastPage, allPages) => allPages.length + 1,
    getPreviousPageParam: (firstPage, allPages) => allPages.length - 1,
  });
  return {
    ...query,
  };
};
