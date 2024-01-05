import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	todos: [],
	todo: [],
	isLoading: false,
};

export const todoSlice = createSlice({
	name: 'todoSlice',
	initialState,
	reducers: {},
});
