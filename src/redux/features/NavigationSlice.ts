import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  navigationRef: '',
};

export const NavigationSlice = createSlice({
  name: 'navigationState',
  initialState,
  reducers: {
    setNavigationRef: (state, action) => {
      state.navigationRef = action.payload;
    },
  },
});

export const {setNavigationRef} = NavigationSlice.actions;

export default NavigationSlice.reducer;
