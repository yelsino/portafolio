import "./App.css";
import AboutMe from "./components/pages/AboutMe/AboutMe";
import Home from "./components/pages/Home";
import MisHerramientas from "./components/pages/MisHerramientas/MisHerramientas";
import Portflolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <div className="App bg-color_purple1  text-white selection:bg-color_purple3 selection:text-white">
      <div className="max-w-6xl mx-auto relative  flex flex-col  ">

        <div className="px-20 flex flex-col gap-y-10 ">
        <Home />
        <AboutMe />
        <MisHerramientas />
        <Portflolio />
        </div>
      
       

        <p className="fixed top-1/2 text-color_purple3 hidden  rotate-90 self-end text-sm sm:flex items-center justify-center gap-x-2">
          Scroll down

          <span className="text-lg -rotate-90">
          <svg width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect width="12" height="18" x="6" y="3" rx="6"></rect><path d="M12 7v4"></path></g></svg>
          </span>
        </p>

      
      </div>
    </div>
  );
}

export default App;
