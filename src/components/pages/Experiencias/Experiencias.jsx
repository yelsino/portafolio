import comsatel from "../../../Assets/comsatel.ico";

const Experiencias = () => {
    return (
        <section id="experiencia" className="mb-20 scroll-mt-20">
            <div className="flex items-center flex-col pb-16">
                <p className="text-color_purple3">mis experiencias</p>
                <h2 className="text-3xl">Experiencias Laborales</h2>
            </div>
            <div>
                <div className="sm:p-5 overflow-hidden bg-color_purple2 flex gap-x-3 items-center p-2 justify-center ">
                    <div className="-translate-y-1">
                        <img src="https://img.icons8.com/color-glass/48/null/trainers.png"/>
                    </div>
                    <div className="text-4xl font-bold flex items-center justify-center ">
                        <span className="text-white">F</span>
                        <span className="text-red-500 text-3xl flex items-center ">
                            O
                        </span>
                        <span className="text-red-500">O</span>
                        <span className="text-white">T</span>
                        <span className="text-white">L</span>
                        <span className="text-red-500 text-3xl flex items-center ">
                            O
                        </span>
                        <span className="text-red-500">O</span>
                        <span className="text-white">S</span>
                        <span className="text-white">E</span>
                    </div>
                </div>
                <div className="text-xl text-left text-color_purple3 sm:text-2xl flex flex-col gap-y-5 py-5 font-dm-sans pt-10">
                    <p>
                        Footloose Perú, empresa que se enfoca en ofrecer una
                        amplia variedad de calzados de alta calidad y diseño
                        para hombres, mujeres y niños a precios accesibles.
                    </p>

                    <p>
                        Me uní a Footloose Perú justo después de terminar mis
                        estudios superiores, sin tener mucha experiencia laboral
                        previa. Durante mi tiempo en Footloose, tuve la
                        oportunidad de trabajar en un proyecto muy interesante.
                    </p>

                    <p>
                        Me asignaron el desarrollo de un{" "}
                        <span className="text-white">
                            sistema para gestionar los pedidos a los proveedores
                        </span>
                        , así como la creación de un módulo dentro del mismo
                        sistema para controlar los carnets de vacunación debido
                        a la pandemia de <span className="text-white">COVID-19</span>. Tuve la oportunidad de
                        trabajar con lenguaje de programación Javascript y el
                        framework ReactJS.
                    </p>

                    <p>
                        La forma de trabajo en Footloose Perú era muy
                        estructurada, cada proyecto se dividía en tareas
                        pequeñas y se presentaba el avance del sistema a las
                        personas de la empresa que lo utilizarían, cada fin de
                        semana. Aprendí mucho de cómo organizar y llevar a cabo
                        proyectos en equipo, además de adquirir habilidades
                        técnicas en programación frontend.
                    </p>
                </div>
            </div>

            <div className="pt-10">
                <div className="sm:p-5 overflow-hidden bg-color_purple2 flex gap-x-3 items-center p-2 justify-center">
                    <div>
                        <img src="https://img.icons8.com/color-glass/48/null/gps-searching.png" />
                    </div>
                    <div className="text-4xl font-bold flex items-center justify-center font-poppins">
                        C
                        <span className="w-9">
                            <img src={comsatel} />
                        </span>
                        MSATEL
                    </div>
                </div>

                <div className="text-xl text-left text-color_purple3 sm:text-2xl flex flex-col gap-y-5 py-5 font-dm-sans pt-10">
                    <p>Empresa líder en ofrecer soluciones tecnológicas de rastreo y gestión vehicular, basadas en sistemas de localización satelital que incrementan la seguridad.</p>
                    <p>
                        {" "}
                        Donde colaboré en el desarrollo de un sistema de <span className="text-white">gestión
                        de citas</span> para la atención de instalaciones y
                        mantenimientos de equipos GPS en distintos vehículos. En
                        la empresa, seguían la <span className="text-white">metodología Scrum</span> para la gestión
                        de proyectos y trabajamos principalmente con el lenguaje
                        de programación Java utilizando Spring Boot, aunque
                        también aprendí a utilizar TypeScript.
                    </p>

                    <p>
                        Durante mi tiempo en Comsatel Perú, estuvimos trabajando
                        en la migración del sistema actual a <span className="text-white">servicios SAP</span> a
                        través de consultas de URL que proveían datos. También
                        trabajamos en varios proyectos simultáneamente, los
                        cuales estaban conectados entre sí para realizar
                        funciones específicas, estos eran <span className="text-white">servicios SOA</span>. El
                        objetivo de la empresa era migrar todos estos servicios
                        a <span className="text-white">microservicios</span>.
                    </p>

                    <p>
                        Esta experiencia me permitió desarrollar mis habilidades
                        en el trabajo en equipo, aprender sobre la metodología
                        Scrum y adquirir habilidades técnicas en Java, Spring
                        Boot y TypeScript.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Experiencias;
