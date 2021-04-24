import { useEffect, useState } from "react";

const Numeros = () => {
	const [textos, setTextos] = useState([]);
	// useEffect(()=>{
	// 	setTextos([])
	// })

	const numeros = [
		{ valor: 1, texto: "uno" },
		{ valor: 2, texto: "dos" },
		{ valor: 3, texto: "tres" },
		{ valor: 4, texto: "cuatro" },
		{ valor: 5, texto: "cinco" },
		{ valor: 6, texto: "seis" },
		{ valor: 7, texto: "siete" },
		{ valor: 8, texto: "ocho" },
		{ valor: 9, texto: "nueve" },
	];
	const raros = [
		{ valor: 10, texto: "diez" },
		{ valor: 11, texto: "once" },
		{ valor: 12, texto: "doce" },
		{ valor: 13, texto: "trece" },
		{ valor: 14, texto: "catorce" },
		{ valor: 15, texto: "quince" },
	];

	const decenas = [
		"dieci",
		"veinti",
		"treinta",
		"cuarenta",
		"cincuenta",
		"sesenta",
		"setenta",
		"ochenta",
		"noveinta",
	];
	const centenas = ["cien", "cientos", "mil", "quinientos"];

	// if(index >=1 && index <=9){
	// 	setTextos([...textos, );
	// }

	const numerosTexto = () => {
		for (let index = 1; index <= 9; index++) {
			console.log('inicio')
				// const copia = textos;
				// copia.push(numeros.find((e) => e.valor === index).texto);
			setTimeout(() => {
				// setTextos([...copia]);
				console.log('gaa')
			}, 1000);
		}
		// if(index >= 10 && index <= 15) {
		//   textos.push(raros.find(e=> e.valor === index).texto)
		// }
		// if(index >= 16 && index <= 19) {
		// 	textos.push(decenas[0] + numeros.find(e=> e.valor === index-10).texto)
		// }
		// if(index === 20){
		// 	textos.push("veinte")
		// }
		// if(index === 21) {
		// 	for (let a = 1; a <= 7; a++) {
		// 		for (let b = 1; b <= 10; b++) {
		// 			textos.push(decenas[a])
		// 		}
		// 	}
		// }
	};

	return (
		<div className="bg-pri-purple-light h-screen w-screen  ">
			<div className="flex flex-wrap">
				{textos.map((e, index) => (
					<span key={index} className="text-white mx-2">
						{e}
					</span>
				))}
			</div>
			<button className="text-white" onClick={numerosTexto}>
				empezar
			</button>
		</div>
	);
};

export default Numeros;
