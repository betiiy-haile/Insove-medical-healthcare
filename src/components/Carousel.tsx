
import { useState, useRef, useEffect } from 'react';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';

const Carousel = ({ children: slides }: any) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    useEffect(() => {
        if (carouselRef.current) {
            (carouselRef.current as any).style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }, [currentIndex]);

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative mx-auto w-full  overflow-hidden">
            <div
                className="flex transition-transform duration-500 mb-12"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: 'transform 0.5s ease-in-out',
                }}
                ref={carouselRef}
            >
                {slides.map((slide: any, index: any) => (
                    <div
                        key={index}
                        className={`flex-shrink-0 w-full`}
                        style={{ minWidth: `${100 / slides.length}%` }}
                    >
                        {slide}
                    </div>
                ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-center " >
                <button
                    onClick={goToPreviousSlide}
                    className="p-1 rounded-full shadow bg-white/80 text-zinc-400 hover:bg-accent-default hover:text-white transition duration-300 mr-2"
                >
                    <IoChevronBack size={20} />
                </button>
                <button
                    onClick={goToNextSlide}
                    className="p-1 rounded-full shadow bg-white/80 text-zinc-400 hover:bg-accent-default hover:text-white transition duration-300 ml-2"
                >
                    <IoChevronForward size={20} />
                </button>
            </div>
        </div>
    );
};

export default Carousel;