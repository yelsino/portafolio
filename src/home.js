import IconDown from "./components/Icon/IconJs copy"

const Home = () => {
  return (
		<div className="bg-pri-purple-light flex flex-col justify-center items-center h-screen relative">
			<svg
				className="absolute top-0"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
			>
				<path
					fill="#1A1130"
					fill-opacity="1"
					d="M0,160L40,144C80,128,160,96,240,69.3C320,43,400,21,480,42.7C560,64,640,128,720,144C800,160,880,128,960,106.7C1040,85,1120,75,1200,64C1280,53,1360,43,1400,37.3L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
				></path>
			</svg>
			<img
				className="absolute bottom-5 left-5 hidden sm:flex"
				src="https://img.icons8.com/nolan/150/rocket.png"
			/>
			{/* <img 
				className='absolute right-10 top-10'
			src="https://img.icons8.com/nolan/240/earth-planet.png" /> */}

			{/* <img  src="https://img.icons8.com/fluent/48/000000/earth-planet.png" /> */}
			<img
				className="sm:hidden flex "
				src="https://img.icons8.com/nolan/150/launched-rocket.png"
			/>

			<p className="text-2xl font-black bg-gradient-to-r from-pri-green-light via-pri-light-blue to-pink-500 bg-clip-text text-transparent font-mono texto_comforta block absolute top-10 tracking-widest">
				home
			</p>
			<p className="text-white text-7xl md:text-7xl lg:text-8xl  texto_comforta block tracking-widest select-none">
				YELSIÑO
			</p>
			<p className="text-2xl md:text-3xl lg:text-4xl tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-pri-green-light via-pri-light-blue to-pink-500">
				desarrollador front-end
			</p>

			<div className=" flex flex-col absolute bottom-10 items-center  ">
				<p className=" text-xl  text-pri-light-blue font-semibold  mb-3 select-none">
					proyectos
				</p>
				<IconDown />
			</div>
		</div>
	);
}
 
export default Home;