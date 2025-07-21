import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

type Props = {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (isOpen: boolean) => void;
    toggleLanguage: () => void;
    navLinks: { to: string; label: string; offset?: number }[];
    language: "en" | "pt";
};

function MenuMobile({
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    toggleLanguage,
    navLinks,
    language,
}: Props) {
    return (
        <nav
            className={`p-10 fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-between transition-transform duration-300 ${
                isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } xl:hidden`}
        >
            <ul className="text-lg space-y-12 text-center">
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
                {/* Language Toggle */}
                <button
                    onClick={toggleLanguage}
                    className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800 transition-all duration-300"
                    title="Change language"
                >
                    <img
                        src={
                            language === "en"
                                ? "/images/flags/br.svg"
                                : "/images/flags/us.svg"
                        }
                        alt={language === "en" ? "Português" : "English"}
                        className="w-5 h-5 cursor-pointer"
                    />
                    <span className="text-xs text-white font-semibold cursor-pointer">
                        {language === "en" ? "PT" : "EN"}
                    </span>
                </button>

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
    );
}

export default MenuMobile;
