import React from "react";
import { type EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
    PrevButton,
    NextButton,
    usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import ProjectCard from "../ProjectsSection/ProjectCard";

type Project = {
    title: string;
    description: string;
    techs: string[];
    link: string;
};

type PropType = {
    projects: Project[];
    options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ projects, options }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    return (
        <div className="w-full max-w-screen-xl mx-auto overflow-hidden px-0 sm:px-12 selection:bg-transparent">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-6">
                    {projects.map((proj, index) => (
                        <div
                            key={index}
                            className="min-w-[90%] sm:min-w-[60%] lg:min-w-[25%] shrink-0"
                        >
                            <ProjectCard {...proj} idx={index} />
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="mt-0 sm:mt-8 flex flex-col items-center sm:gap-4 gap-2"
                data-aos="zoom-in-up"
            >
                <div className="flex gap-4">
                    <PrevButton
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                    />
                    <NextButton
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                    />
                </div>
                <div className="flex gap-2">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={
                                "w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-500 transition " +
                                (index === selectedIndex
                                    ? "bg-white"
                                    : "opacity-50")
                            }
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EmblaCarousel;
