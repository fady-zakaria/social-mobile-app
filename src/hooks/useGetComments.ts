import {useInfiniteQuery} from '@tanstack/react-query';
import getComments from '../services/comments.service';

export const useGetComments = (postId) => {
    console.log("postID in useGetComments", postId)
  const query = useInfiniteQuery({
    queryKey: ['comments', postId],
    queryFn: () => getComments(postId, pageParam),
    getNextPageParam: (lastPage, allPages) => allPages.length + 1,
  });
  return {...query};
};
