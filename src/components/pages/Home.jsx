import { Link } from "react-router-dom";
import CV from "../../Assets/cv-yelsiño.pdf";
import Slider from "../Atoms/Slider";

const Home = () => {
  return (
    <section id="home" className=" h-screen flex flex-col justify-center items-center gap-y-10 relative">
      <p className="text-xl">Hola, soy</p>
      <h1 className="text-7xl font-semibold tracking-wider ">Yelsiño</h1>
      <h2 className="text-color_purple3 text-xl">Full Stack Developer</h2>

      <div className="flex justify-center gap-x-5">
        <button className="p-3 px-6 border border-color_purple3 transition ease-in-out duration-500   font-bold text-color_purple3 hover:bg-color_purple3 hover:text-white rounded-md hover:shadow-lg">
          <a download="cv yelsiño" href={CV}>
            Descargar CV
          </a>
        </button>
        <button className="p-3 px-6 border border-color_purple3 transition ease-in-out duration-500   font-bold text-color_purple3 hover:bg-color_purple3 hover:text-white rounded-md hover:shadow-lg">
          <a
            target="_blank"
            href="https://wa.me/939616350?text=Me%20interesa%20tu%20perfil%20de%20desarrollador"
          >
            Hablemos
          </a>
        </button>
      </div>

      <Slider />


      <div className="absolute top-1/2 left-0 text-2xl text-color_purple3  flex-col items-center gap-y-5 -translate-y-[77px] hidden sm:flex">
        <a href="https://www.instagram.com/yelsino321/?hl=es" target="_blank">
          <svg width="1em" height="1em" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37zm1.5-4.87h.01"></path>
            </g>
          </svg>
        </a>

        <a href="https://github.com/yelsino?tab=repositories" target="_blank">
          <svg width="1em" height="1em" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
            ></path>
          </svg>
        </a>

        <div className="w-1 h-12 bg-color_purple3"></div>
      </div>

      {/* <Link to='/blog' className="absolute top-10 right-0 text-color_purple3 font-bold hover:text-white cursor-default transition duration-500">Blog</Link> */}
    </section>
  );
};

export default Home;
