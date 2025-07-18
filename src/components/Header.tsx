import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "./Button";
import { Link } from "react-scroll";

function Header() {
    const { t } = useTranslation();
    const navLinksStyle = "hover-underline";

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [curLang, _] = useState<"pt" | "en">("pt");

    return (
        <>
            <div id="top" />
            <header
                id="header"
                className={`bg-black text-white w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
                    isScrolled ? "h-[72px] py-4" : "h-[98px] py-6"
                }`}
            >
                <div className="max-w-10xl mx-auto px-9 relative flex items-center justify-between transition-all duration-300">
                    {/* Logo à esquerda */}
                    <div className="flex-shrink-0">
                        <h1
                            className={`font-['Michroma'] transition-all duration-300 ${
                                isScrolled
                                    ? "text-lg sm:text-xl"
                                    : "text-xl sm:text-2xl"
                            } cursor-default`}
                        >
                            LC
                        </h1>
                    </div>

                    {/* Navbar centralizada absolutamente */}
                    <nav className="font-['Inter400'] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <ul className="flex gap-x-9 text-sm sm:text-base">
                            <li>
                                <Link
                                    to="top"
                                    className={navLinksStyle}
                                    duration={500}
                                    smooth
                                    offset={-window.innerHeight}
                                >
                                    {t("header.nav.home")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="projects"
                                    className={navLinksStyle}
                                    duration={500}
                                    smooth
                                    offset={-100}
                                >
                                    {t("header.nav.projects")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="experiences"
                                    className={navLinksStyle}
                                    duration={500}
                                    smooth
                                    offset={-100}
                                >
                                    {t("header.nav.experiences")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="contact"
                                    className={navLinksStyle}
                                    duration={500}
                                    smooth
                                    offset={-20}
                                >
                                    {t("header.nav.contact")}
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Botões à direita */}
                    <div className="flex gap-3 flex-shrink-0">
                        <Button type="secondary">
                            <a
                                href={`/cv/lucascarmona-${curLang}.pdf`}
                                download
                            >
                                {t("header.button2")}
                            </a>
                        </Button>
                        <Button type="primary">{t("header.button1")}</Button>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
