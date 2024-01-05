import React from 'react';
import AuthPage from './pages/AuthPage';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<>
			<Routes>
				<Route path="/login" element={<AuthPage />} />
				<Route path="/register" element={<AuthPage />} />
			</Routes>
		</>
	);
}

export default App;
