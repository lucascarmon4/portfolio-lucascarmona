import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function ContactSection() {
    return (
        <section
            id="contact"
            className="font-['Inter400'] min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-black text-white"
        >
            <h2
                className="text-4xl sm:text-5xl font-extrabold text-center mb-12"
                data-aos="zoom-in-up"
            >
                ENTRE EM CONTATO
            </h2>

            <div
                className="bg-[#111] border border-white/10 rounded-2xl p-8 sm:p-10 w-full max-w-xl shadow-lg"
                data-aos="zoom-in-up"
            >
                <h3 className="text-2xl font-bold text-center mb-2">
                    ENVIE UMA MENSAGEM
                </h3>
                <p className="text-base text-white/60 text-center mb-8">
                    Fique à vontade para escrever, se for bug, job ou café, eu
                    topo conversar.
                </p>

                <form className="flex flex-col gap-5">
                    <input
                        data-aos="fade-right"
                        data-aos-delay={0}
                        type="text"
                        placeholder="Nome"
                        className="bg-black border border-white/20 text-base text-white px-5 py-3 rounded-md placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                        data-aos="fade-right"
                        data-aos-delay={50}
                        type="email"
                        placeholder="Email"
                        className="bg-black border border-white/20 text-base text-white px-5 py-3 rounded-md placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <textarea
                        data-aos="fade-right"
                        data-aos-delay={100}
                        placeholder="Digite sua mensagem"
                        rows={6}
                        className="bg-black border border-white/20 text-base text-white px-5 py-3 rounded-md placeholder:text-white/30 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </form>

                {/* Ícones sociais */}
                <div className="flex justify-center gap-8 mt-8 text-white/80 text-2xl">
                    <a
                        href="https://www.linkedin.com/in/lucas-carmona-neto/"
                        target="_blank"
                        data-aos="zoom-in-down"
                        data-aos-delay={0}
                    >
                        <FaLinkedin className="hover:text-primary transition-all duration-400 hover:transform hover:scale-110 cursor-pointer" />
                    </a>
                    <a
                        href="https://github.com/lucascarmon4"
                        target="_blank"
                        data-aos="zoom-in-down"
                        data-aos-delay={50}
                    >
                        <FaGithub className="hover:text-primary transition-all duration-400 hover:transform hover:scale-110 cursor-pointer" />
                    </a>
                    <a
                        href="mailto:lucascarmonaneto510@gmail.com"
                        data-aos="zoom-in-down"
                        data-aos-delay={100}
                    >
                        <FaEnvelope className="hover:text-primary transition-all duration-400 hover:transform hover:scale-110 cursor-pointer" />
                    </a>
                </div>

                {/* Botão */}
                <div className="mt-8" data-aos="zoom-in-up" data-aos-delay={50}>
                    <button
                        type="submit"
                        className="w-full bg-white text-black font-semibold py-3 rounded-md text-lg hover:bg-primary hover:text-white transition-all hover:translate-y-[-5px] duration-300"
                    >
                        ENVIAR
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
