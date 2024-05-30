import {IUser, IUsersSliceState} from '../../types/user.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
const initialState: IUsersSliceState = {
  selectedUser: null,
};
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state: IUsersSliceState, {payload}: PayloadAction<IUser>) => {
      state.selectedUser = payload;
    },
  },
});

const {
  reducer: userReducer,
  actions: {setUser},
} = userSlice;
const userAction = {
  setUser,
};
export {userAction, userReducer};
