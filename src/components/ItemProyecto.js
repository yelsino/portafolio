import { Link } from "react-router-dom";

const ItemProyecto = ({tipo,titulo,elementos,link}) => {
  return (
		<Link
    to={`/${link}`}
			id="proyecto-1"
			className=" shadow-inner w-72 h-32 bg-pri-purple-dark rounded-xl cursor-pointer justify-center items-center flex z-10 flex-col hover__animate"
		>
			<p className="top-4 right-4 text-gray-500 text-right w-full pr-4">
				{tipo}
			</p>
			<p className="text-pri-light-blue mb-2 text-lg">{titulo}</p>
			<div className="flex text-gray-500 w-full justify-evenly">
				<span>{elementos.item1}</span>
				<span>{elementos.item2}</span>
				<span>{elementos.item3}</span>
			</div>
			{/* <div
				id="proyecto-1-datos"
				className="fondocolor absolute top-0 left-0 z-20 w-full h-full text-white justify-center items-center flex-col hidden"
			>
				<p className="text-2xl font-black bg-gradient-to-r from-pri-green-light via-pri-light-blue to-pink-600 bg-clip-text text-transparent tracking-widest font-mono texto_comforta block absolute top-10 ocultar">
					listas de pedidos
				</p>

				<div className="flex overflow-hidden justify-center h-screen items-center mt5">
					<img
						className="max-w-full max-h-full rounded-lg lg:hidden"
						src="./static/lista.png"
						alt=""
					/>
					<img
						className="max-w-full max-h-full rounded-lg hidden lg:flex"
						src="./static/imagen2.png"
						alt=""
					/>
				</div>

				<div className="slider">
					<ul className="flex overflow-hidden justify-center h-screen items-center mt5">
						<li>
							<img
								className="max-w-full max-h-full rounded-lg lg:hidden"
								src="./static/lista.png"
								alt=""
							/>
						</li>
						<li>
							<img
								className="max-w-full max-h-full rounded-lg lg:hidden"
								src="./static/lista.png"
								alt=""
							/>
						</li>
						<li>
							<img
								className="max-w-full max-h-full rounded-lg lg:hidden"
								src="./static/lista.png"
								alt=""
							/>
						</li>
						<li>
							<img
								className="max-w-full max-h-full rounded-lg lg:hidden"
								src="./static/lista.png"
								alt=""
							/>
						</li>
					</ul>
				</div>

				<a
					className="mt-5 hover:text-pri-light-blue"
					href="https://negocios-carlos.000webhostapp.com/"
					target="_blank"
				>
					visitar sitio
				</a>
				<button
					id="cerrar-1"
					className="rounded-lg px-10 py-2 border border-pink-600 text-pink-500 font-bold absolute bottom-10 btn-cerrar hover:text-transparent hover:from-pri-green-light hover:via-pri-light-blue hover:to-pink-500 bg-gradient-to-t bg-clip-text"
				>
					cerrar
				</button>
			</div>
		 */}
		</Link>
	);
}
 
export default ItemProyecto;