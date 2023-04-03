import "./App.css";
import Header from "./components/Atoms/Header";
import AboutMe from "./components/pages/AboutMe/AboutMe";
import Experiencias from "./components/pages/Experiencias/Experiencias";
import Home from "./components/pages/Home";
import MisHerramientas from "./components/pages/MisHerramientas/MisHerramientas";
import Portflolio from "./components/pages/Portfolio/Portfolio";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App bg-color_purple1  text-white selection:bg-color_purple3 selection:text-white ">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div className="max-w-6xl mx-auto relative  flex flex-col  ">
                                <div className="px-10 sm:px-20 flex flex-col gap-y-10 ">
                                    <Header />
                                    <Home />
                                    <AboutMe />
                                    <Experiencias />
                                    <MisHerramientas />
                                    <Portflolio />
                                </div>

                                <div className="fixed top-1/2 text-color_purple3 hidden  rotate-90 self-end text-sm sm:flex items-center justify-center gap-x-2">
                                    Scroll down
                                    <span className="text-lg -rotate-90">
                                        <svg
                                            width="1em"
                                            height="1em"
                                            viewBox="0 0 24 24"
                                        >
                                            <g
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                            >
                                                <rect
                                                    width="12"
                                                    height="18"
                                                    x="6"
                                                    y="3"
                                                    rx="6"
                                                ></rect>
                                                <path d="M12 7v4"></path>
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                              
                            </div>
                        }
                    />
                    <Route path="/blog" element={<p>BLOG</p>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
