import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slices/userSlice';
import { todoSlice } from './slices/todoSlice';

const store = configureStore({
	reducer: {
		userSlice: userSlice.reducer,
		todoSlice: todoSlice.reducer,
	},
});

export default store;
