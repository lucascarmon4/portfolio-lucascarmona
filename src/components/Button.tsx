type Props = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type: "primary" | "secondary";
};

function Button({
    children,
    onClick = () => {},
    className = "",
    type = "primary",
}: Props) {
    const isPrimary = type === "primary";

    return (
        <button
            onClick={onClick}
            className={`text-white relative overflow-hidden inline-block px-6 py-3 rounded-lg border border-primary 
        font-['Inter400'] cursor-pointer z-0 group hover:translate-y-[-2px] transition-transform duration-300 ease-in-out
        ${isPrimary ? "text-black bg-primary" : "text-primary bg-transparent"}
        ${className}`}
        >
            {/* fundo animado */}
            <span
                className={`absolute top-0 h-full w-0 z-0 transition-all duration-300 ease-in-out 
          ${
              isPrimary
                  ? "left-0 group-hover:w-full bg-black"
                  : "right-0 group-hover:w-full bg-primary"
          }
        `}
            ></span>

            {/* conteúdo do botão */}
            <span
                className={`relative z-10 transition-colors duration-300 ease-in-out`}
            >
                {children}
            </span>
        </button>
    );
}

export default Button;
