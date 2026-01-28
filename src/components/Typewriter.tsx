import { useEffect, useState } from "react";

export interface TypewriterProps {
    texts: string[];
    speed?: number;
    deleteSpeed?: number;
    delayBetweenTexts?: number;
    className?: string;
}

export function Typewriter({
    texts,
    speed = 80,
    deleteSpeed = 40,
    delayBetweenTexts = 2000,
    className,
}: TypewriterProps) {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [textArrayIndex, setTextArrayIndex] = useState(0);

    const currentText = texts[textArrayIndex] || "";

    useEffect(() => {
        if (!currentText) return;

        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    // Digitando
                    if (currentIndex < currentText.length) {
                        setDisplayText((prev) => prev + currentText[currentIndex]);
                        setCurrentIndex((prev) => prev + 1);
                    } else {
                        // Terminou de digitar, aguarda antes de apagar
                        setTimeout(() => setIsDeleting(true), delayBetweenTexts);
                    }
                } else {
                    // Apagando
                    if (displayText.length > 0) {
                        setDisplayText((prev) => prev.slice(0, -1));
                    } else {
                        // Terminou de apagar, vai para o próximo texto
                        setIsDeleting(false);
                        setCurrentIndex(0);
                        setTextArrayIndex((prev) => (prev + 1) % texts.length);
                    }
                }
            },
            isDeleting ? deleteSpeed : speed
        );

        return () => clearTimeout(timeout);
    }, [
        currentIndex,
        isDeleting,
        currentText,
        speed,
        deleteSpeed,
        delayBetweenTexts,
        displayText,
        texts,
        textArrayIndex,
    ]);

    return (
        <span className={className}>
            {displayText}
            <span className="animate-pulse ml-[2px]">|</span>
        </span>
    );
}
