import { useTranslation } from "react-i18next";
import Button from "./Button";
import { Link } from "react-scroll";
import i18n from "../utils/i18n";
import { TypeAnimation } from "react-type-animation";

function Hero() {
    const { t } = useTranslation();
    const language = i18n.language as "en" | "pt";
    return (
        <section
            id="header"
            className="mt-[98px] min-h-[calc(100vh-98px)] flex items-center justify-center bg-black text-white px-6"
        >
            {/* Conteúdo central */}
            <div className="text-center max-w-2xl">
                <h1
                    className="text-2xl sm:text-3xl md:text-4xl font-['Inter400'] font-bold leading-tight mb-6"
                    data-aos="fade-down"
                    data-delay={0}
                    dangerouslySetInnerHTML={{ __html: t("hero.title") }}
                />

                <p
                    className="text-sm sm:text-base text-gray-300 mb-8 font-[Inter400]"
                    data-aos="fade-down"
                    data-aos-delay={100}
                >
                    {t("hero.description")}
                </p>

                <div
                    data-aos="fade-down"
                    data-aos-delay={200}
                    className="flex justify-center gap-4 flex-wrap"
                >
                    <Button type="primary">
                        <a href={`/cv/lucascarmona-${language}.pdf`} download>
                            {t("header.button2")}
                        </a>
                    </Button>
                    <Link to="projects" smooth duration={500} offset={-50}>
                        <Button type="secondary">{t("header.button1")}</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Hero;
