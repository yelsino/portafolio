import IconDown from "./components/Icon/IconJs copy"

const Home = () => {
  return (
		<div className="bg-pri-purple-light flex flex-col justify-center items-center h-screen relative">
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