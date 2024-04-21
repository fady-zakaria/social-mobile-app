import {httpClient} from './httpClient';

const getComments = (postId: string, page: number, maxRecs: number = 2) =>
  httpClient
    .get(`/public/v2/posts/${postId}/comments?page=${page}&per_page=${maxRecs}`)
    .then(response => response);

export default getComments;
