import Tools from "./Tools";

const MisHerramientas = () => {
  return (
    <section id="herramienta" className="mb-20 scroll-mt-20">
      <div className="flex items-center flex-col pb-16">
        <p className="text-color_purple3">¿Que uso para desarrollar?</p>
        <h2 className="text-3xl">Mis Herramientas</h2>
      </div>
      <div className="flex flex-col sm:flex-row gap-10 ">
        <Tools tools={hFrontend} title="Herramientas Frontend" />
        <Tools tools={hBackend} title="Herramientas Backend" />
      </div>
    </section>
  );
};

export default MisHerramientas;

const hBackend = [
  {
    herramienta: "NodeJS",
    nivel: "Intermediante",
  },
  {
    herramienta: "Express",
    nivel: "Intermediante",
  },
  {
    herramienta: "MongoDB",
    nivel: "Intermediante",
  },
  {
    herramienta: "Mongoose",
    nivel: "Intermediante",
  },
  {
    herramienta: "Spring Boot",
    nivel: "Basico",
  },
  {
    herramienta: "Mysql",
    nivel: "Basico",
  },
];

const hFrontend = [
  {
    herramienta: "HTML",
    nivel: "Experimentado",
  },
  {
    herramienta: "CSS",
    nivel: "Experimentado",
  },
  {
    herramienta: "JavaScript",
    nivel: "Experimentado",
  },
  {
    herramienta: "React",
    nivel: "Experimentado",
  },
  {
    herramienta: "Tailwind",
    nivel: "Experimentado",
  },
  {
    herramienta: "Angular",
    nivel: "Basico",
  },
];
