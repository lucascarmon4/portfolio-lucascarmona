import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "./Button";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Header() {
    const { t } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { to: "top", label: t("header.nav.home"), offset: -window.innerHeight },
        { to: "projects", label: t("header.nav.projects"), offset: -100 },
        { to: "experiences", label: t("header.nav.experiences"), offset: -100 },
        { to: "contact", label: t("header.nav.contact"), offset: -20 },
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
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <h1
                        className={`font-['Michroma'] transition-all duration-300 ${
                            isScrolled
                                ? "text-lg sm:text-xl"
                                : "text-xl sm:text-2xl"
                        } cursor-default`}
                    >
                        LC
                    </h1>

                    {/* Ícone Hamburguer */}
                    <div
                        className="sm:hidden flex flex-col gap-[6px] cursor-pointer z-50"
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
                    <nav className="hidden sm:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-['Inter400']">
                        <ul className="flex gap-x-9 text-sm sm:text-base">
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
                    <div className="hidden sm:flex gap-3">
                        <Button type="secondary">
                            <a href="/cv/lucascarmona-pt.pdf" download>
                                {t("header.button2")}
                            </a>
                        </Button>
                        <Button type="primary">{t("header.button1")}</Button>
                    </div>
                </div>

                {/* Menu Mobile */}
                <nav
                    className={`p-5 fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-between gap-10 transition-transform duration-300 ${
                        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                    } sm:hidden`}
                >
                    <ul className="text-lg space-y-6 text-center">
                        {navLinks.map(({ to, label, offset }) => (
                            <li key={to}>
                                <Link
                                    to={to}
                                    smooth
                                    duration={500}
                                    offset={offset}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* SOCIAL MEDIA */}
                    <div className="flex gap-6 text-2xl">
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
                </nav>
            </header>
        </>
    );
}

export default Header;
