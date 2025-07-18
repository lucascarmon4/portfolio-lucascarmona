import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Projeto 1",
        description: "Descrição curta do projeto...",
        techs: ["React", "PHP", "MySQL"],
        link: "https://github.com/seu-projeto",
    },
    {
        title: "Projeto 2",
        description: "Outro projeto top...",
        techs: ["TypeScript", "Node.js", "PostgreSQL"],
        link: "https://github.com/seu-projeto2",
    },
    {
        title: "Projeto 3",
        description: "Mais um projeto incrível...",
        techs: ["Next.js", "MongoDB", "Tailwind CSS"],
        link: "https://github.com/seu-projeto3",
    },
    {
        title: "Projeto 4",
        description: "Descrição do projeto 4...",
        techs: ["Vue.js", "Express", "SQLite"],
        link: "https://github.com/seu-projeto4",
    },
    // ... mais projetos
];

function ProjectsSection() {
    return (
        <section className="bg-black text-white px-6 py-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
                MEUS PROJETOS
            </h2>

            <div>
                {projects.map((proj, idx) => (
                    <div key={idx} className="keen-slider__slide">
                        <ProjectCard {...proj} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProjectsSection;
