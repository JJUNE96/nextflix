import Head from 'next/head';

function login() {
	return (
		<div className='relative flex h-screen flex-col md:items-center md:justify-center'>
			<Head>
				<title>Nextflix Member</title>
				<link rel='icon' href='favicon.icon' />
			</Head>

			<img
				src='https://rb.gy/ulxxee'
				alt='netflix'
				width={200}
				height={130}
				className='absolute left-4 top-4 object-contain cursor-pointer md:left10 md:top-6 md:mt-0 md:max-w-md d:px-14'
			/>

			<form className='relative mt-24 space-y-8 rounded bg-black/70 py-10 px-6 md:max-w-md md:px-14'>
				<h1>Sign In</h1>
				<div>
					<input type='email' placeholder='Email' />
					<input type='password' placeholder='Password' />
				</div>

				<button>Sign In</button>

				<div>
					New to Netflix? <button>Sign Up Now</button>
				</div>
			</form>
		</div>
	);
}

export default login;
