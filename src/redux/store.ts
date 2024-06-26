import {configureStore} from '@reduxjs/toolkit';
import PostsReducer from './features/PostsSlice';
import navigationReducer from './features/NavigationSlice';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

const middlewares: any[] = [
  /* other middlewares */
];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

export const store = configureStore({
  reducer: {
    postsState: PostsReducer,
    navigationState: navigationReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewares),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
