import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	users: [],
	isLogin: false,
	isLoading: false,
};

export const userSlice = createSlice({
	name: 'userSlice',
	initialState,
	reducers: {},
});
