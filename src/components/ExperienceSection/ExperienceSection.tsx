import { useRef, useState, useEffect } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import QualificationItem from "./QualificationItem";
import ExperienceItem from "./ExperienceItem";
import experiences from "../../data/experiences.json";
import qualifications from "../../data/qualifications.json";

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

    const data = activeTab === "experiences" ? experiences : qualifications;

    return (
        <section
            id="experiences"
            className="bg-black text-white px-6 py-20 font-['Inter400'] flex flex-col items-center min-h-[calc(100vh-98px)]"
        >
            <h2
                className="text-3xl sm:text-4xl font-bold mb-8 text-center"
                data-aos="zoom-in-up"
            >
                EXPERIÊNCIAS E QUALIFICAÇÕES
            </h2>

            <div
                className="relative flex justify-center gap-6 mb-10"
                data-aos="zoom-in-up"
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
                    EXPERIÊNCIAS
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
                    QUALIFICAÇÕES
                </button>
            </div>

            {/* Linha do tempo */}
            <div className="relative  max-w-[500px] margin-auto">
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
                                Ver todos os certificados no LinkedIn ↗
                            </a>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default ExperienceSection;
