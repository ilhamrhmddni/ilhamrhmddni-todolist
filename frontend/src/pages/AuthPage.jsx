import { useLocation } from 'react-router-dom';
import Login from '../components/Login';
import Register from './../components/Register';

function Auth() {
	const location = useLocation();
	const isActivePage = (pathname) => location.pathname === pathname;

	return (
		<>
			<div className="flex flex-col sm:flex-row h-screen">
				<div className="w-full h-1/2 sm:h-full sm:w-1/2">
					<img
						src="https://source.unsplash.com/random"
						alt=""
						className="h-full w-full object-cover"
					/>
				</div>
				<div className="w-full h-1/2 sm:h-full sm:w-1/2 flex flex-col justify-center">
					{isActivePage('/register') && <Register />}
					{isActivePage('/login') && <Login />}
				</div>
			</div>
		</>
	);
}

export default Auth;
