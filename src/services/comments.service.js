import {httpClient} from './httpClient';

// const getComments = (postId, page, maxRecs) =>
//   httpClient
//     .get(`/public/v2/posts/${postId}/comments?page=${page}&per_page=${maxRecs}`)
//     .then(response => response);

const getComments = async (postId, page, maxRecs) => {
  const {data} = await httpClient.get(
    `/public/v2/posts/${postId}/comments?page=${page}&per_page=${maxRecs}`,
  );
  return data;
};

export default getComments;
