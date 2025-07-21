import { useTranslation } from "react-i18next";
import Button from "../Button";

type Props = {
    title: string;
    description: string;
    techs: string[];
    image?: string;
    link: string;
    idx: number;
    source?: string;
    isOffline?: boolean;
};

function ProjectCard({
    title,
    description,
    techs,
    image,
    link,
    idx,
    source,
    isOffline = false,
}: Props) {
    const { t } = useTranslation();

    return (
        <div
            data-aos="fade-down"
            data-aos-delay={`${(idx + 1) * 100}`}
            className="bg-black border border-white/10 rounded-lg overflow-hidden flex flex-col shadow-lg w-full max-w-sm sm:max-w-md lg:max-w-md h-full"
        >
            {/* imagem */}
            <div className="h-40 sm:h-48 bg-gray-900 flex items-center justify-center text-white text-sm sm:text-base">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover"
                    />
                ) : (
                    t("projects.noImage")
                )}
            </div>

            {/* conteúdo */}
            <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
                <div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-1">
                        {title}
                    </h3>

                    {/* fonte */}
                    <div className="flex items-center flex-wrap gap-2 mb-2">
                        {source && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 border border-white/20 text-gray-200">
                                {t(`projects.sources.${source}`)}
                            </span>
                        )}
                        {isOffline && (
                            <span className="text-xs px-2 py-0.5 rounded-full text-red-400 border border-red-400">
                                Offline
                            </span>
                        )}
                    </div>

                    <p className="text-sm sm:text-base text-gray-300 mb-4">
                        {description}
                    </p>

                    {/* techs */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {techs.map((tech) => (
                            <span
                                key={tech}
                                className="text-xs sm:text-sm px-2 py-0.5 rounded-full bg-white/10 border border-white/20"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* botão */}
                <Button
                    type="primary"
                    onClick={() => {
                        if (!isOffline) window.open(link, "_blank");
                    }}
                    disabled={isOffline}
                >
                    {isOffline
                        ? t("projects.buttons.offline")
                        : t("projects.buttons.view")}
                </Button>
            </div>
        </div>
    );
}

export default ProjectCard;
