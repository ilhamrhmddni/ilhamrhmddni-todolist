import { Link } from 'react-router-dom';

function Register() {
	return (
		<div className="flex flex-col">
			<p className="text-center font-bold my-4 text-2xl">Register</p>
			<form action="" className="flex flex-row font-bold p-4 px-8 mx-auto">
				<div className="flex gap-3 sm:gap-4 flex-col">
					<label htmlFor="name" className="">
						Username
					</label>
					<label htmlFor="email" className="">
						Email
					</label>
					<label htmlFor="password1" className="">
						Password
					</label>
					<label htmlFor="password2" className="pr-3">
						Konfirmasi Password
					</label>
				</div>
				<div className="flex flex-col gap-3">
					<input
						type="text"
						id="name"
						className="w-full border-black border rounded"
					/>
					<input
						type="email"
						id="email"
						className="w-full border-black border rounded"
					/>
					<input
						type="password"
						id="password1"
						className="w-full border-black border rounded"
					/>
					<input
						type="password"
						id="password2"
						className="w-full border-black border rounded my-1"
					/>
				</div>
			</form>
			<div className="flex items-center justify-center mt-4 gap-2 font-bold">
				Sudah Punya Akun?
				<Link to={'/login'}>
					<button className="border bg-black text-white px-3 py-1 rounded-xl font-normal">
						Login
					</button>
				</Link>
			</div>
		</div>
	);
}

export default Register;
