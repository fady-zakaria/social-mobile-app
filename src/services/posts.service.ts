import {httpClient} from './httpClient';

const getPosts = (page: number, maxRecs: number = 2) =>
  httpClient
    .get(`/public/v2/posts?page=${page}&per_page=${maxRecs}`)
    .then(response => response);

export default getPosts;
