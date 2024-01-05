import { Link } from 'react-router-dom';

function Login() {
	return (
		<div className="flex flex-col">
			<p className="text-center font-bold m-4 text-2xl">Login</p>
			<form
				action=""
				className="flex flex-row font-bold p-4 items-center justify-between px-8"
			>
				<div className="flex flex-col gap-2">
					<label htmlFor="email" className="">
						Email
					</label>
					<label htmlFor="password" className="">
						Password
					</label>
				</div>
				<div className="flex gap-2 flex-col">
					<input
						type="email"
						id="email"
						className="w-full border-black border rounded"
					/>
					<input
						type="password"
						id="password"
						className="w-full border-black border rounded"
					/>
				</div>
			</form>
			<div className="flex items-center justify-center mt-4 gap-2 font-bold">
				Belum Punya Akun?
				<Link to={'/register'}>
					<button className="border bg-black text-white px-3 py-1 rounded-xl font-normal">
						Register
					</button>
				</Link>
			</div>
		</div>
	);
}

export default Login;
