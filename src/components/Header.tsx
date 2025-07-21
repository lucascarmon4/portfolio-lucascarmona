import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "./Button";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import i18n from "../utils/i18n";
import MenuMobile from "./Header/MenuMobile";

function Header() {
    const { t } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleLanguage = () => {
        const newLang = language === "en" ? "pt" : "en";
        i18n.changeLanguage(newLang);
        setLanguage(newLang);
    };

    const [language, setLanguage] = useState<"en" | "pt">(
        i18n.language as "en" | "pt"
    );

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isDesktop = window.innerWidth > 1024;

    const navLinks = [
        {
            to: "top",
            label: t("header.nav.home"),
            offset: isDesktop ? -window.innerHeight : 0,
        },
        {
            to: "projects",
            label: t("header.nav.projects"),
            offset: isDesktop ? -50 : 70,
        },
        {
            to: "experiences",
            label: t("header.nav.experiences"),
            offset: isDesktop ? -100 : 0,
        },
        {
            to: "contact",
            label: t("header.nav.contact"),
            offset: isDesktop ? -20 : 15,
        },
    ];

    const navLinksStyle = "hover-underline";

    return (
        <>
            <div id="top" />
            <header
                className={`bg-black font-['Inter400'] text-white fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                    isScrolled ? "h-[72px] py-4" : "h-[98px] py-6"
                }`}
            >
                <div className=" mx-auto px-7 flex items-center justify-between">
                    {/* Logo */}
                    <h1
                        className={`font-['Michroma'] transition-all duration-300 ${
                            isScrolled
                                ? "text-lg xl:text-xl"
                                : "text-xl xl:text-2xl"
                        } cursor-default`}
                    >
                        LC
                    </h1>

                    {/* Ícone Hamburguer */}
                    <div
                        className="xl:hidden flex flex-col gap-[6px] cursor-pointer z-50"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <div
                            className={`w-6 h-[2px] bg-white transition-all origin-left ${
                                isMobileMenuOpen
                                    ? "rotate-45 -translate-y-2"
                                    : ""
                            }`}
                        ></div>
                        <div
                            className={`w-6 h-[2px] bg-white transition-all ${
                                isMobileMenuOpen ? "opacity-0" : ""
                            }`}
                        ></div>
                        <div
                            className={`w-6 h-[2px] bg-white transition-all origin-left ${
                                isMobileMenuOpen
                                    ? "-rotate-45 -translate-y-2"
                                    : ""
                            }`}
                        ></div>
                    </div>

                    {/* Navbar Desktop */}
                    <nav className="hidden xl:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-['Inter400']">
                        <ul className="flex gap-x-8 text-sm xl:text-base">
                            {navLinks.map(({ to, label, offset }) => (
                                <li key={to}>
                                    <Link
                                        to={to}
                                        className={navLinksStyle}
                                        duration={500}
                                        smooth
                                        offset={offset}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Botões Desktop */}
                    <div className="hidden xl:flex gap-3">
                        <Button type="secondary">
                            <a
                                href={`/cv/lucascarmona-${language}.pdf`}
                                download
                            >
                                {t("header.button2")}
                            </a>
                        </Button>
                        <Link to="projects" smooth duration={500} offset={-50}>
                            <Button type="primary">
                                {t("header.button1")}
                            </Button>
                        </Link>
                        <div className="hidden xl:flex items-center gap-3 ml-2">
                            <button
                                onClick={toggleLanguage}
                                className="flex items-center gap-2 px-2 py-1 rounded-full bg-gray-800 transition-all duration-300"
                                title="Change language"
                            >
                                <img
                                    src={
                                        language === "en"
                                            ? "/images/flags/br.svg"
                                            : "/images/flags/us.svg"
                                    }
                                    alt={
                                        language === "en"
                                            ? "Português"
                                            : "English"
                                    }
                                    className="w-5 h-5 cursor-pointer "
                                />
                                <span className="cursor-pointer  text-xs text-white font-semibold">
                                    {language === "en" ? "PT" : "EN"}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                <MenuMobile
                    isMobileMenuOpen={isMobileMenuOpen}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                    toggleLanguage={toggleLanguage}
                    navLinks={navLinks}
                    language={language}
                />

                {/* SOCIAL ICONS - Fixed Left (Desktop Only) */}
                <div className="hidden xl:flex flex-col gap-6 text-2xl fixed left-6 top-1/2 -translate-y-1/2 z-40">
                    <a
                        href="https://linkedin.com/in/lucas-carmona-neto"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className="hover:text-teal-400 transition duration-400 hover:scale-110 cursor-pointer" />
                    </a>
                    <a
                        href="https://github.com/lucascarmon4"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="hover:text-teal-400 transition duration-400 hover:scale-110 cursor-pointer" />
                    </a>
                    <a href="mailto:lucascarmonaneto510@gmail.com">
                        <FaEnvelope className="hover:text-teal-400 transition duration-400 hover:scale-110 cursor-pointer" />
                    </a>
                </div>
            </header>
        </>
    );
}

export default Header;
