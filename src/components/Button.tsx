type Props = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type: "primary" | "secondary";
    disabled?: boolean;
};

function Button({
    children,
    onClick = () => {},
    className = "",
    type = "primary",
    disabled = false,
}: Props) {
    const isPrimary = type === "primary";

    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`
                relative overflow-hidden inline-block px-6 py-3 rounded-lg border font-['Inter400']
                transition-transform duration-300 ease-in-out
                ${
                    disabled
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer hover:translate-y-[-2px] group"
                }
                ${
                    isPrimary
                        ? `bg-primary border-primary text-black`
                        : `bg-transparent border-primary text-primary`
                }
                ${className}
            `}
        >
            {/* fundo animado */}
            {!disabled && (
                <span
                    className={`
                        absolute top-0 h-full w-0 z-0 transition-all duration-300 ease-in-out cursor-pointer
                        ${
                            isPrimary
                                ? "left-0 group-hover:w-full bg-black"
                                : "right-0 group-hover:w-full bg-primary"
                        }
                    `}
                ></span>
            )}

            {/* conteúdo */}
            <span
                className={`
                    relative z-10 transition-colors duration-300 ease-in-out
                    ${!disabled ? "group-hover:text-white cursor-pointer" : ""}
                `}
            >
                {children}
            </span>
        </button>
    );
}

export default Button;
