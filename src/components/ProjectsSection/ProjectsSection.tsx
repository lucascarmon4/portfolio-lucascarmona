import EmblaCarousel from "../Carousel/EmblaCarousel";
import projects from "../../data/projects.json";

function ProjectsSection() {
    return (
        <section id="projects" className="bg-black text-white px-6 py-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
                MEUS PROJETOS
            </h2>

            <EmblaCarousel
                projects={projects}
                options={{
                    align: "start",
                    slidesToScroll: 1,
                    loop: false,
                }}
            />
        </section>
    );
}

export default ProjectsSection;
