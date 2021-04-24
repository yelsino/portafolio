import IconDown from "./components/Icon/IconJs copy";
import ItemProyecto from "./components/ItemProyecto";

const Proyectos = () => {

	const proyectos = [
		{
			id: 1,
			tipo: "proyecto",
			titulo: "listas de pedidos",
			elementos: { item1: "react", item2: "node", item3: "tailwind" },
			link: "pedidos",
		},
		{
			id: 2,
			tipo: "proyecto",
			titulo: "gestion de pedidos",
			elementos: { item1: "react", item2: "node", item3: "tailwind" },
			link: "gestion",
		},
		// {
		// 	id: 3,
		// 	tipo: "hobbie",
		// 	titulo: "numeros en texto del 1 al 1000",
		// 	elementos: { item1: "", item2: "java script", item3: "" },
		// 	link: "numeros",
		// },
	];

	return (
		<div className="flex flex-col items-center justify-center  h-screen bg-pri-purple-light relative">
			<p className="text-2xl font-black bg-gradient-to-r from-pri-green-light via-pri-light-blue to-pink-600 bg-clip-text text-transparent tracking-widest font-mono texto_comforta block absolute top-10">
				proyectos
			</p>

			<div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20 xl:grid-cols-3  mx-auto">
				{proyectos.map((e) => (
					<ItemProyecto
						tipo={e.tipo}
						titulo={e.titulo}
						elementos={e.elementos}
						link={e.link}
					/>
				))}
				<div className='laptop'>
					<ItemProyecto
						tipo={""}
						titulo={"proximamente..."}
						elementos={{}}
						link={""}
					/>
				</div>
			</div>
			<div className=" flex flex-col absolute bottom-10 items-center  ">
				<p className=" text-xl  text-pri-light-blue font-semibold  mb-3 select-none">
					contacto
				</p>
				<IconDown />
			</div>
		</div>
	);
};

export default Proyectos;
