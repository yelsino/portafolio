import screen1 from "../../Assets/screen1.png";
import screen2 from "../../Assets/screen2.png";
import screen3 from "../../Assets/screen3.png";

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
              <div className=" flex justify-start gap-x-10">
                {p.liveDemo && (
                  <button className="p-3 px-6 border border-color_purple3 transition ease-in-out duration-500   font-bold text-color_purple3 hover:bg-color_purple3 hover:text-white rounded-md hover:shadow-lg">
                    Github
                  </button>
                )}

                {p.liveDemo && (
                  <button className="p-3 px-6 border border-color_purple3 transition ease-in-out duration-500   font-bold text-color_purple3 hover:bg-color_purple3 hover:text-white rounded-md hover:shadow-lg">
                    Ver demo
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}

        <div className=" bg-color_purple2 p-5 rounded-3xl ">
          <div className="max-w-xl mx-auto flex items-center h-full justify-center ">
            <p className="font-poppins font-bold ">PROXIMAMENTE...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// TODO agregar slider a las imagenes

export default Portflolio;

const proyects = [
  {
    img: screen2,
    description:
      "Aplicación web para gestionar eficientemente pedidos de una tienda de vegetales y controlar deudas de clientes frecuentes",
    detalle:
      "Esta aplicación está contruida para el control y gestion de listas de pedidos que se generan a travez de una tienda online, ademas controla los creditos de clientes presenciales del negocio",
    repository: "https://github.com/yelsino/ncarlos-admin-v2",
    liveDemo: "https://admin-ncarlos.web.app/ventas/pedidos",
  },
  {
    img: screen1,
    description:
      "Aplicación web para la  venta de vegetales al por minoreo a travez de listas de productos",
    detalle:
      "Esta aplicación web permite a las personas seleccionar sus productos en distintas listas y hacer un pedidos de aquellas, esto brinda al cliente flexibilidad y ahorro de tiempo al comprar productos habituales como las papas que siempre se utiliza en una cocina o productos de una receta para dias especiales",
    repository: "https://github.com/yelsino/ns-carlos-tienda-v2",
    liveDemo: "https://yola-satipo.web.app/",
  },
  {
    img: screen3,
    description:
      "Landing page una web para atraer clientes con necesidades de servicios informáticos",
    detalle:
      "Esta landing page fue contruida para idexa peru una reciente empresa en el mercado para solucionar distintos problemas informáticos en la localidad de huancayo principalmente ",
    repository: "https://github.com/yelsino/portafolio",
    liveDemo: "https://idexaperu.com/",
  },
];
