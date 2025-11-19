import { useRef, useState, useEffect } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import QualificationItem from "./QualificationItem";
import ExperienceItem from "./ExperienceItem";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const ExperienceSection = () => {
    const [activeTab, setActiveTab] = useState<
        "experiences" | "qualifications"
    >("experiences");
    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

    const qualificationsRef = useRef<HTMLButtonElement>(null);
    const experiencesRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const activeRef =
            activeTab === "qualifications" ? qualificationsRef : experiencesRef;

        if (activeRef.current) {
            const { offsetLeft, offsetWidth } = activeRef.current;
            setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
        }
    }, [activeTab]);

    const { t } = useTranslation();

    const experienceKeys = [
        "quatrodois",
        "viva_cred_2024",
        "backsite_2023",
        "viva_cred_2020",
    ];

    const experiences = experienceKeys.map((key) => ({
        title: t(`experiences.${key}.title`),
        company: t(`experiences.${key}.company`),
        period: t(`experiences.${key}.period`),
        description: t(`experiences.${key}.description`),
    }));

    const qualificationKeys = [
        "aws_cloud",
        "laravel_alura",
        "python_impressionador",
    ];

    const qualifications = qualificationKeys.map((key) => ({
        title: t(`qualifications.${key}.title`),
        company: t(`qualifications.${key}.company`),
        period: t(`qualifications.${key}.period`),
        description: t(`qualifications.${key}.description`),
        link: t(`qualifications.${key}.link`, ""),
    }));

    const data = activeTab === "experiences" ? experiences : qualifications;

    return (
        <section
            id="experiences"
            className="bg-black text-white px-6 py-20 font-['Inter400'] flex flex-col items-center min-h-[calc(100vh-98px)] relative z-10"
        >
            <motion.h2
                className="text-3xl sm:text-4xl font-bold mb-8 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {t("experiences.mainTitle").toUpperCase()}
            </motion.h2>

            <motion.div
                className="relative flex justify-center gap-6 mb-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                {/* Underline animado */}
                <div
                    className="absolute bottom-0 h-[2px] bg-primary transition-all duration-300"
                    style={{
                        left: underlineStyle.left,
                        width: underlineStyle.width,
                    }}
                />

                <button
                    ref={experiencesRef}
                    onClick={() => setActiveTab("experiences")}
                    className={`flex items-center gap-2 px-4 py-2 text-sm rounded-md transition relative ${
                        activeTab === "experiences"
                            ? "text-white"
                            : "text-white/30"
                    }`}
                >
                    <FaBriefcase size={25} />
                    {t("experiences.title").toUpperCase()}
                </button>
                <button
                    ref={qualificationsRef}
                    onClick={() => setActiveTab("qualifications")}
                    className={`flex items-center gap-2 px-4 py-2 text-sm rounded-md transition relative ${
                        activeTab === "qualifications"
                            ? "text-white"
                            : "text-white/30"
                    }`}
                >
                    <FaGraduationCap size={25} />
                    {t("qualifications.title").toUpperCase()}
                </button>
            </motion.div>

            {/* Linha do tempo */}
            <div className="relative max-w-[500px] margin-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: activeTab === "experiences" ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: activeTab === "experiences" ? 20 : -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {activeTab === "experiences" ? (
                            data.map((item, idx) => (
                                <ExperienceItem idx={idx} key={idx} {...item} />
                            ))
                        ) : (
                            <>
                                {data.map((item, idx) => (
                                    <QualificationItem idx={idx} key={idx} {...item} />
                                ))}

                                {/* Botão Ver todos */}
                                <div className="mt-6 text-center">
                                    <a
                                        href="https://www.linkedin.com/in/lucas-carmona-neto/details/certifications/"
                                        target="_blank"
                                        className="text-primary font-semibold hover:underline"
                                    >
                                        {t("qualifications.seeAllOnLinkedIn")} ↗
                                    </a>
                                </div>
                            </>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default ExperienceSection;
