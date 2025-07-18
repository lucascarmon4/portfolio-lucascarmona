import Button from "./Button";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Hero() {
    return (
        <section
            id="header"
            className="mt-[98px] min-h-[calc(100vh-98px)] flex items-center justify-center bg-black text-white px-6"
        >
            {/* Ícones sociais à esquerda */}
            <div className="fixed left-6 top-1/2 -translate-y-1/2 space-y-6 text-xl z-40 flex flex-col justify-center">
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
            {/* Conteúdo central */}
            <div className="text-center max-w-2xl">
                <h1
                    className="text-3xl sm:text-4xl md:text-5xl font-['Inter400'] font-bold leading-tight mb-6"
                    data-aos="fade-down"
                    data-delay={0}
                >
                    <span>DESENVOLVEDOR</span>
                    <br />
                    FULLSTACK COM FOCO EM
                    <br />
                    SOLUÇÕES INTELIGENTES.
                </h1>

                <p
                    className="text-sm sm:text-base text-gray-300 mb-8 font-[Inter400]"
                    data-aos="fade-down"
                    data-aos-delay={100}
                >
                    Cursando Ciência da Computação, desenvolvo aplicações
                    completas com React no front e PHP no back, unindo
                    performance, organização e boas práticas.
                </p>

                <div
                    data-aos="fade-down"
                    data-aos-delay={200}
                    className="flex justify-center gap-4 flex-wrap"
                >
                    <Button type="primary">Download CV</Button>
                    <Button type="secondary">Acessar Portfólio</Button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
