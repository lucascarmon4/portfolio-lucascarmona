import { useEffect, useState } from "react";

function CustomCursor() {
    const [realCursor, setRealCursor] = useState({ x: 0, y: 0 });
    const [trailCursor, setTrailCursor] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isText, setIsText] = useState(false);

    // Detecta elementos sob o cursor
    useEffect(() => {
        const move = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            setRealCursor({ x: clientX, y: clientY });

            const el = document.elementFromPoint(clientX, clientY);
            console.log(el?.tagName);
            if (
                el &&
                (el.tagName === "A" ||
                    el.tagName === "BUTTON" ||
                    el.classList.contains("cursor-pointer"))
            ) {
                setIsPointer(true);
                setIsText(false);
            } else if (el && isTextElement(el)) {
                setIsPointer(false);
                setIsText(true);
            } else {
                setIsPointer(false);
                setIsText(false);
            }
        };

        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    // Rastro suave
    useEffect(() => {
        setTrailCursor(realCursor);
    }, [realCursor]);

    // Verifica se é texto ou elemento editável
    function isTextElement(el: Element): boolean {
        const tag = el.tagName;
        const editable = (el as HTMLElement).isContentEditable;
        return (
            tag === "P" ||
            tag === "SPAN" ||
            tag === "PRE" ||
            tag === "CODE" ||
            tag === "TEXTAREA" ||
            tag === "INPUT" ||
            editable
        );
    }

    return (
        <>
            {/* Rastro (blur) */}
            <div
                className="fixed top-0 left-0 pointer-events-none z-[9998] transition-transform duration-300 ease-out"
                style={{
                    transform: `translate(${trailCursor.x - 32}px, ${
                        trailCursor.y - 32
                    }px)`,
                }}
            >
                <div className="w-20 h-20 rounded-full bg-primary opacity-30 blur-xl mix-blend-screen"></div>
            </div>

            {/* Cursor principal */}
            <div
                className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-150 ease-out"
                style={{
                    transform: `translate(${realCursor.x}px, ${realCursor.y}px)`,
                }}
            >
                {isText ? (
                    // Estilo barra de texto
                    <div className="w-px h-6 bg-primary animate-pulse" />
                ) : (
                    // Estilo ponteiro / normal
                    <div
                        className={`transition-all duration-150 ease-out rounded-full mix-blend-difference 
                        ${
                            isPointer
                                ? "w-4 h-4 border bg-primary border-white"
                                : "w-4 h-4 border border-primary bg-transparent"
                        }`}
                    ></div>
                )}
            </div>
        </>
    );
}

export default CustomCursor;
