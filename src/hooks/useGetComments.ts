import {useInfiniteQuery} from '@tanstack/react-query';
import getComments from '../services/comments.service';

export const useGetComments = (postId: string) => {
  const query = useInfiniteQuery({
    queryFn: ({pageParam = 1}) => getComments(postId, pageParam),
    queryKey: ['comments', postId],
    getNextPageParam: (lastPage, allPages) => allPages.length + 1,
    getPreviousPageParam: (firstPage, allPages) => allPages.length - 1,
  });
  return {
    ...query,
  };
};
