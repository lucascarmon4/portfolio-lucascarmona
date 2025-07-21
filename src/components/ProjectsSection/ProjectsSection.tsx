import EmblaCarousel from "../Carousel/EmblaCarousel";
import projectsRaw from "../../data/projects.json";
import { useTranslation } from "react-i18next";

function ProjectsSection() {
    const { t } = useTranslation();

    const projects = projectsRaw.map((project) => ({
        ...project,
        title: t(`projects.${project.id}.title`),
        description: t(`projects.${project.id}.description`),
    }));

    return (
        <section
            id="projects"
            className="bg-black text-white sm:px-6 px-0 py-20 font-['Inter400']"
        >
            <h2
                className="text-3xl sm:text-4xl font-bold mb-12 text-center"
                data-aos="zoom-in-up"
            >
                {t("projects.title").toUpperCase()}
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
