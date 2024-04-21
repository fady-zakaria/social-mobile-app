import {useInfiniteQuery} from '@tanstack/react-query';
import getPosts from '../services/posts.service';

export const useGetPosts = () => {
  const query = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: (pageParam = 1) => getPosts(pageParam, 2),
    getNextPageParam: (lastPage, allPages) => allPages.length + 1,
  });
  return {...query};
};

// getPreviousPageParam: (firstPage, allPages) => allPages.length - 1,