import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  post: {},
};

export const PostsSlice = createSlice({
  name: 'postsState',
  initialState,
  reducers: {
    setPost: (state, action) => {
      state.post = action.payload;
    },
  },
});

export const {setPost} = PostsSlice.actions;

export default PostsSlice.reducer;
