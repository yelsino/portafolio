import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import Contacto from './contacto';
import Home from './home';
import Proyectos from './Proyectos';

const Portafolio = () => {
  return (
		<FullPage>
			<Slide>
				<Home />
			</Slide>
			<Slide>
				<Proyectos />
			</Slide>
			<Slide>
				<Contacto />
			</Slide>
		</FullPage>
	);
}
 
export default Portafolio;