import React from 'react';
import './slideNav.css';

const SliderNav = ({slides, goToSlide, currentSlide}) => {

    const handleNav = (id) => {
        goToSlide(id);
    }

    const getNumber = (number) => {
        return number.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        })
    }

    return (
        <div className={`${currentSlide.current === 0 ? 'opacity-0 width-0' : 'opacity-1 width-auto'} duration-300 fixed top-24 md:top-28 right-5vw z-30 bottom-28 md:bottom-5vw overflow-y-auto scrollbar`}>
            <div className='flex flex-col justify-between items-end h-full pr-[2px]'>
                {
                    slides.map((item,index) => {
                        return (
                            <div className='flex gap-1 items-center cursor-pointer select-none' onClick={() => handleNav(index)} key={index}>
                                {
                                    slides[currentSlide.current].theme === 'dark' ? 
                                    <div className='flex gap-1 items-center'>
                                        <div className={`h-[1px] bg-black drop-shadow-dark1 duration-300 ${currentSlide.current === index ? 'w-2' : 'w-0'}`}></div>
                                        <span className={`text-sm sm:text-sm md:text-base font-mono drop-shadow-dark1 duration-300 hover:text-black/70 ${currentSlide.current === index ? 'text-black' : 'text-black/60'}`}>{getNumber(index + 1)}</span>
                                    </div>
                                    : 
                                    <div className='flex gap-1 items-center'>
                                        <div className={`h-[1px] bg-white drop-shadow-dark1 duration-300 ${currentSlide.current === index ? 'w-2' : 'w-0'}`}></div>
                                        <span className={`text-sm sm:text-sm md:text-base font-mono drop-shadow-dark1 duration-300 hover:text-gray-200 ${currentSlide.current === index ? 'text-white' : 'text-gray-400/70'}`}>{getNumber(index + 1)}</span>
                                    </div>
                                }
                                
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SliderNav;