// @ts-nocheck
import screen1 from "../../Assets/screen1.png";
import screen2 from "../../Assets/screen2.png";
import screen3 from "../../Assets/screen3.png";
import screen4 from "../../Assets/screen4.png";
import { alltools } from "../Atoms/images";

const Portflolio = () => {
  return (
    <div className="pb-20">
      <div className="flex items-center flex-col pb-7">
        <p className="text-color_purple3">mis proyectos</p>
        <h2 className="text-3xl">Portafolio</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 gap-10">
        {proyects.map((p, index) => (
          <div key={index} className=" bg-color_purple2 p-5 rounded-3xl ">
            <div className="max-w-xl mx-auto flex flex-col gap-y-7 ">
              <img className="rounded-2xl object-cover" src={p.img} />
              <p className="text-xl text-left font-bold font-poppins ">
                {p.description}
              </p>

        

              <p className="text-lg text-left font-dm-sans text-color_purple3">
                {p.detalle}
              </p>
              <div className="flex gap-x-5 flex-col">
                <p className="text-left pb-2">Desarrollado con</p>
                <div className="flex flex-wrap gap-x-5 gap-y-2 ">
                {p.tools.map(({text},index) => (
                  <span key={index}
                    className=' font-semibold text-color_purple3'
                  >{text}</span>
                ))}
                </div>
              </div>
              <div className=" flex justify-start gap-x-10">
                {p.liveDemo && (
                  <a
                    target="_blank"
                    href={p.repository}
                    className="p-3 px-6 border border-color_purple3 transition ease-in-out duration-500   font-bold text-color_purple3 hover:bg-color_purple3 hover:text-white rounded-md hover:shadow-lg"
                  >
                    Github
                  </a>
                )}

                {p.liveDemo && (
                  <a
                    target="_blank"
                    href={p.liveDemo}
                    className="p-3 px-6 border border-color_purple3 transition ease-in-out duration-500   font-bold text-color_purple3 hover:bg-color_purple3 hover:text-white rounded-md hover:shadow-lg"
                  >
                    Ver demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* <div className=" bg-color_purple2 p-5 rounded-3xl ">
          <div className="max-w-xl mx-auto flex items-center h-full justify-center ">
            <p className="font-poppins font-bold ">PROXIMAMENTE...</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

// TODO agregar slider a las imagenes

export default Portflolio;


const {javascript,tailwindcss,nodejs,mongodb,figma,reactjs,socketio, typescript, springboot} = alltools

const proyects = [
  {
    img: screen2,
    description:
      "Aplicación web para gestionar eficientemente pedidos de una tienda de vegetales y controlar deudas de clientes frecuentes",
    detalle:
      "Esta aplicación está construida para el control y gestión de listas de pedidos que se generan a través de una tienda online, además controla los créditos de clientes presenciales del negocio.",
    repository: "https://github.com/yelsino/ncarlos-admin-v2",
    liveDemo: "https://admin-ncarlos.web.app/ventas/pedidos",
    tools: [javascript,tailwindcss,nodejs,mongodb,figma,reactjs,socketio],
  },
  {
    img: screen1,
    description:
      "Aplicación web para la venta de vegetales al por minoreo a través de listas de productos.",
    detalle:
      "Esta aplicación web permite a las personas seleccionar sus productos en distintas listas y hacer un pedidos de aquellas, esto brinda al cliente flexibilidad y ahorro de tiempo al comprar productos habituales como las papas que siempre se utiliza en una cocina o productos de una receta para días especiales.",
    repository: "https://github.com/yelsino/ns-carlos-tienda-v2",
    liveDemo: "https://yola-satipo.web.app/",
    tools: [javascript,tailwindcss,nodejs,mongodb,figma,reactjs,socketio],
  },
  {
    img: screen3,
    description:
      "Landing page una web para atraer clientes con necesidades de servicios informáticos.",
    detalle:
      "Esta landing page fue construida para “idexa perú” una reciente empresa en el mercado para solucionar distintos problemas informáticos en la localidad de Huancayo principalmente.",
    repository: "https://github.com/yelsino/portafolio",
    liveDemo: "https://idexaperu.com/",
    tools: [javascript,tailwindcss,figma,reactjs],
  },
  {
    img: screen4,
    description: "Aplicación para gestionar todas tus tareas personales diarias.",
    detalle:
      "Esta aplicación web diseñada solo para dispositivos móviles donde puedes gestionar tus tareas cotidianas del día a día.",
    repository: "https://github.com/yelsino/daily-task",
    liveDemo: "https://comsatel-tasks.web.app/",
    tools: [typescript,tailwindcss,figma,reactjs, springboot],
  },
];
