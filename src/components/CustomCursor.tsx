import { useEffect, useState } from "react";

function CustomCursor() {
    const [realCursor, setRealCursor] = useState({ x: 0, y: 0 });
    const [trailCursor, setTrailCursor] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isText, setIsText] = useState(false);

    // Atualiza posição do cursor real
    useEffect(() => {
        const move = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            setRealCursor({ x: clientX, y: clientY });

            const el = document.elementFromPoint(clientX, clientY);

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

    // Rastro suavizado com animação frame a frame
    useEffect(() => {
        let animationFrameId: number;

        const smoothFollow = () => {
            setTrailCursor((prev) => {
                const dx = realCursor.x - prev.x;
                const dy = realCursor.y - prev.y;
                const speed = 0.1;
                return {
                    x: prev.x + dx * speed,
                    y: prev.y + dy * speed,
                };
            });

            animationFrameId = requestAnimationFrame(smoothFollow);
        };

        animationFrameId = requestAnimationFrame(smoothFollow);
        return () => cancelAnimationFrame(animationFrameId);
    }, [realCursor]);

    // Detecta se é campo de texto
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
            {/* Rastro com blur */}
            <div
                className="fixed top-0 left-0 pointer-events-none z-[9998]"
                style={{
                    transform: `translate(${trailCursor.x - 40}px, ${
                        trailCursor.y - 40
                    }px)`,
                }}
            >
                <div className="w-20 h-20 rounded-full bg-primary opacity-30 blur-xl mix-blend-screen" />
            </div>

            {/* Cursor principal */}
            <div
                className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-150 ease-out"
                style={{
                    transform: isText
                        ? `translate(${realCursor.x - 0.5}px, ${
                              realCursor.y - 12
                          }px)`
                        : `translate(${realCursor.x - 8}px, ${
                              realCursor.y - 8
                          }px)`,
                }}
            >
                {isText ? (
                    <div className="w-px h-6 bg-primary animate-pulse" />
                ) : (
                    <div
                        className={`transition-all duration-150 ease-out rounded-full mix-blend-difference 
                        ${
                            isPointer
                                ? "w-4 h-4 border bg-primary border-white"
                                : "w-4 h-4 border border-primary bg-transparent"
                        }`}
                    />
                )}
            </div>
        </>
    );
}

export default CustomCursor;
