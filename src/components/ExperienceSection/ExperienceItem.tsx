import { FaCalendar } from "react-icons/fa";

type Props = {
    title: string;
    company: string;
    period: string;
    description: string;
    idx: number;
};

function ExperienceItem({ title, company, period, description, idx }: Props) {
    return (
        <div
            className="relative pl-6"
            data-aos="fade-right"
            data-aos-delay={`${(idx + 1) * 100}`}
        >
            {/* Linha iniciando abaixo da bolinha */}
            <div className="absolute left-1 top-5 bottom-0 w-px bg-white/20" />

            {/* Bolinha */}
            <span className="absolute left-[-3px] top-[6px] w-4 h-4 bg-primary rounded-full border border-black" />

            {/* Conteúdo */}
            <div className="mb-5">
                <h4 className="text-lg font-bold text-white">{company}</h4>

                <p className="text-sm text-white/50 flex items-center gap-2 mt-1">
                    <FaCalendar className="text-white/40" />
                    {period}
                </p>

                <h3 className="text-base font-semibold text-primary mt-1">
                    {title}
                </h3>

                <p
                    className="text-sm text-white/80 mt-3 leading-relaxed"
                    dangerouslySetInnerHTML={{
                        __html: description.replace(/\n/g, "<br />"),
                    }}
                />
            </div>
        </div>
    );
}

export default ExperienceItem;
