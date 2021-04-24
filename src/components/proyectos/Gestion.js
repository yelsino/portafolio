import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
import "./estilo.css";
import Img1 from "../assets/img-gestion/img1.png";
import Img2 from "../assets/img-gestion/img2.png";
import Img3 from "../assets/img-gestion/img3.png";
import Img4 from "../assets/img-gestion/img4.png";
import Img5 from "../assets/img-gestion/img5.png";

import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import IconJs from "../Icon/IconJs";
import IconTailwind from "../Icon/IconTailwind";
import IconReact from "../Icon/IconReact";
import IconGitHub from "../Icon/IconGit";
import { useHistory } from "react-router";
const Gestion = () => {
	const history = useHistory();
	return (
		<div className="mx-auto bg-pri-purple-light ">
			<Splide>
				<SplideSlide>
					<p className=" absolute right-0 transform -rotate-90 animate-pulse text-lg text-pri-light-blue tracking-wider -mr-4">
						mas datos
					</p>
					<button
						onClick={() => {
							history.push("");
						}}
						className="text-red-500  bottom-10 right-0 absolute bg-white px-4 py-2 rounded-lg border border-white hover:border-red-500 hover:bg-red-200"
					>
						cerrar
					</button>
					<h2 className="text-2xl font-black bg-gradient-to-r from-pri-green-light via-pri-light-blue to-pink-500 bg-clip-text text-transparent font-mono texto_comforta block absolute top-10 tracking-widest laptop text-center bg-red-300">
						listas de pedidos
					</h2>
					<div className="flex justify-center items-center 2xl:w-9/12 ">
						<div className="hidden lg:flex  justify-center  ">
							<img className="images" src={Img3} />
						</div>
						<div className="text-white w-4/5 md:w-2/5 text-lg tracking-wider lg:px-10 flex justify-center flex-col items-center">
							<h2 className="text-2xl font-black bg-gradient-to-r from-pri-green-light via-pri-light-blue to-pink-500 bg-clip-text text-transparent font-mono texto_comforta  top-5 tracking-widest text-center hidden laptopshow  bg-red-400">
								listas de pedidos
							</h2>
							<p className="text-white break-words leading-7 text-center mt-5">
								Esta aplicacion web tiene como objetivo permitir a los usuarios
								realizar pedidos de productos vegetales, a travez de multiples
								listas de pedidos
							</p>
							<div className="my-5 flex justify-center flex-col items-center">
								<h3 className="mb-5 ">lenguaje de programacion</h3>
								<div className="flex w-full justify-center">
									<div className="flex flex-col items-center">
										<IconJs />
										<p className="text-gray-400">JavaScript </p>
									</div>
									<div className="mx-5"></div>
								</div>
							</div>
							<div className="my-5 flex justify-center flex-col items-center">
								<h3 className="mb-5">herramientas de desarrollo</h3>
								<div className="flex justify-evenly w-full">
									<div className="flex flex-col items-center">
										<IconTailwind />
										<p className="text-gray-400">Tailwind </p>
									</div>
									<div className="flex flex-col items-center">
										<IconReact />
										<p className="text-gray-400">React</p>
									</div>
									<div className="flex flex-col items-center">
										<IconGitHub />
										<p className="text-gray-400">GitHub</p>
									</div>
								</div>
							</div>

							<div className="flex">
								<div className="my-5 flex justify-center flex-col items-center ">
									<h3 className="">visitar aplicacion</h3>
									<div className="flex">
										{" "}
										<a
											className="text-pri-light-blue cursor-pointer font-bold hover:text-pink-600"
											target="_blank"
											href="https://negocios-carlos.000webhostapp.com/"
										>
											link
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</SplideSlide>

				<SplideSlide>
					<button
						onClick={() => {
							history.push("");
						}}
						className="text-red-500  bottom-10 right-0 absolute bg-white px-4 py-2 rounded-lg border border-white hover:border-red-500 hover:bg-red-200"
					>
						cerrar
					</button>
					<img className=" sm:w-full md:w-8/12 lg:w-6/12" src={Img1} />
				</SplideSlide>
				<SplideSlide>
					<button
						onClick={() => {
							history.push("");
						}}
						className="text-red-500  bottom-10 right-0 absolute bg-white px-4 py-2 rounded-lg border border-white hover:border-red-500 hover:bg-red-200"
					>
						cerrar
					</button>
		
					<img className=" sm:w-full md:w-8/12 lg:w-6/12" src={Img3} />
				</SplideSlide>
				<SplideSlide>
					<button
						onClick={() => {
							history.push("");
						}}
						className="text-red-500  bottom-10 right-0 absolute bg-white px-4 py-2 rounded-lg border border-white hover:border-red-500 hover:bg-red-200"
					>
						cerrar
					</button>
					<img className=" sm:w-full md:w-8/12 lg:w-6/12" src={Img2} />
				</SplideSlide>
				<SplideSlide>
					<button
						onClick={() => {
							history.push("");
						}}
						className="text-red-500  bottom-10 right-0 absolute bg-white px-4 py-2 rounded-lg border border-white hover:border-red-500 hover:bg-red-200"
					>
						cerrar
					</button>
					<img className=" sm:w-full md:w-8/12 lg:w-6/12" src={Img4} />
				</SplideSlide>
				<SplideSlide>
					<button
						onClick={() => {
							history.push("");
						}}
						className="text-red-500  bottom-10 right-0 absolute bg-white px-4 py-2 rounded-lg border border-white hover:border-red-500 hover:bg-red-200"
					>
						cerrar
					</button>
					<img className=" sm:w-full md:w-8/12 lg:w-6/12" src={Img5} />
				</SplideSlide>
			</Splide>
		</div>
	);
};

export default Gestion;
