import Button from "../Button";

type Props = {
    title: string;
    description: string;
    techs: string[];
    image?: string;
    link: string;
    idx: number;
};

function ProjectCard({ title, description, techs, image, link, idx }: Props) {
    return (
        <div
            data-aos="fade-down"
            data-aos-delay={`${(idx + 1) * 100}`}
            className="bg-black border border-white/10 rounded-lg overflow-hidden flex flex-col shadow-lg w-full max-w-sm"
        >
            {/* imagem */}
            <div className="h-40 bg-gray-900 flex items-center justify-center text-white text-sm">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover"
                    />
                ) : (
                    "Prévia do Projeto"
                )}
            </div>

            {/* conteúdo */}
            <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                    <h3 className="text-lg font-semibold mb-2">{title}</h3>
                    <p className="text-sm text-gray-300 mb-4">{description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {techs.map((tech) => (
                            <span
                                key={tech}
                                className="text-xs px-2 py-0.5 rounded-full bg-white/10 border border-white/20"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                <Button
                    type="primary"
                    onClick={() => window.open(link, "_blank")}
                >
                    Acessar projeto
                </Button>
            </div>
        </div>
    );
}

export default ProjectCard;
