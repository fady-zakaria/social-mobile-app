import {httpClient} from './httpClient';
// const getPosts = (page, maxRecs) =>
//   httpClient
//     .get(`/public/v2/posts?page=${page}&per_page=${maxRecs}`)
//     .then(response => response);

const getPosts = async (page: number = 1, maxRecs: number = 5) => {
  const {data} = await httpClient.get(
    `/public/v2/posts?page=${page}&per_page=${maxRecs}`,
  );
  return data;
};

export default getPosts;
