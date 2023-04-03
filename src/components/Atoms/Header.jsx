import { useEffect, useState } from "react";

const Header = () => {

    const [activeMenu, setActiveMenu] = useState("home");

    useEffect(() => {
        function handleScroll() {
          const sections = document.querySelectorAll("section");
          const scrollPosition = window.pageYOffset;
    
          sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top + scrollPosition - 80;
            const sectionBottom = sectionTop + section.clientHeight;
    
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              const sectionId = section.getAttribute("id");
              setActiveMenu(sectionId);
              window.history.replaceState(null, null, "#" + sectionId);
            }
          });
        }
    
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    return (
        <header className="fixed py-5  pr-20 z-30 hidden sm:flex bg-color_purple1 w-full">
            <nav>
                <ul className="flex gap-x-5 text-color_purple3 font-medium text-lg">
                    <li className={`cursor-pointer hover:text-color_blue1 ease-in-out duration-300 ${activeMenu === 'home' ? 'text-color_blue1' : ''}`}>
                        <a href="#home" className="">Home</a>
                    </li>
                    <li className={`cursor-pointer hover:text-color_blue1 ease-in-out duration-300 ${activeMenu === 'abaut' ? 'text-color_blue1' : ''}`}>
                        <a href="#abaut">Sobre mí</a>
                    </li>
                    <li className={`cursor-pointer hover:text-color_blue1 ease-in-out duration-300 ${activeMenu === 'experiencia' ? 'text-color_blue1' : ''}`}>
                        <a href="#experiencia">Experiencias</a>
                    </li>
                    <li className={`cursor-pointer hover:text-color_blue1 ease-in-out duration-300 ${activeMenu === 'herramienta' ? 'text-color_blue1' : ''}`}>
                        <a href="#herramienta">Herramientas</a>
                    </li>
                    <li className={`cursor-pointer hover:text-color_blue1 ease-in-out duration-300 ${activeMenu === 'portafolio' ? 'text-color_blue1' : ''}`}>
                        <a href="#portafolio">Portafolio</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
