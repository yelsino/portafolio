import ButtonsMe from "./ButtonsMe";

const AboutMe = () => {
  return (
    <div className="mb-20">
      <div className="flex items-center flex-col pb-16">
        <p className="text-color_purple3">conóceme</p>
        <h2 className="text-3xl">Sobre mí</h2>
      </div>
      <div className=" ">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          {actionMe.map((action, index) => (
            <ButtonsMe key={index} action={action} />
          ))}
        </div>
        <div className=" text-xl text-left text-color_purple3 sm:text-2xl flex flex-col gap-y-5 py-5 font-dm-sans pt-10">
          <p>Hola soy Yelsin Caso, egresado Computación e informática en 2021.</p>

          <p>Tengo 25 años, mi especialidad es el desarrollo frontend y tengo el objectivo en este mundo tecnologico desarrollar experiencias de usuario únicos.</p>
          <p>Siempre estoy aprendiendo autodidacticamente en plataformas como Udemy o Youtube.</p>
          <p>
            Llevo mas de 2 años enfocado en el desarrollo de sistemas web, mi
            compromiso, es desarrollar sistemas modernos con diseños agradables
            e intuitivos para mis clientes.
          </p>

          <p>
            Actualmente estoy desarrollando una tienda online para la venta de
            vegetales al por minoreo en mis ratos libres. visitalo aqui
            <a target='_blank' className="text-color_blue1" href="https://yola-satipo.web.app/"> yola-satipo.web.app</a>
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

const actionMe = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-color_blue1" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
  </svg>,
    title: "TITULO",
    value: "Egresado",
  },
  {
    icon: (
      <img src="https://img.icons8.com/external-color-outline-adri-ansyah/50/undefined/external-awards-awards-color-outline-adri-ansyah-28.png" />
    ),
    title: "EXPERIENCIA",
    value: "+2 años",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-color_blue1"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
      </svg>
    ),
    title: "CLIENTES",
    value: "2 clientes",
  },
  {
    icon: (
      <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/50/undefined/external-portfolio-advertising-kiranshastry-lineal-color-kiranshastry.png" />
    ),
    title: "PORTAFOLIO",
    value: "3 proyectos",
  },
];
