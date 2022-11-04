import React from 'react';
import { Link } from 'react-router-dom';
import ContactSlide from './contactSlide';


const Slide = ({data, goToSlide, current, index}) => {

    const cdnURL = "https://cdn.isafilmschool.com/home-page-videos/";

    if(data.primary === 'First_Slide') {
        return (
            <div className='h-screen relative cursor-crosshair'>
                    <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                        {/* <source src={`${cdnURL + 'intro.mp4'}`} type="video/mp4" /> */}
                        <source src={`${cdnURL}${data.mediaUrl}`} type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>
                    <div className='absolute top-0 left-0 h-full w-full z-10 p-5vw'>
                        <div className='h-full w-full flex flex-col items-center justify-center gap-10 animate-shrinkGap'>
                            <img className="w-1/2 md:w-1/3 lg:w-1/4 animate-fadeIn drop-shadow-dark1" src={`${process.env.PUBLIC_URL}/assets/images/logo/white.png`} alt="logo"/>
                            <p className='w-full md:w-2/3 lg:w-1/2 text-xl lg:text-2xl font-thin text-white text-center drop-shadow-dark1'>{data.subHeading}</p>
                            <img onClick={() => goToSlide(1)} className="animate-[bounce_1s_infinite_3000ms] h-10 duration-300 hover:scale-125 cursor-pointer drop-shadow-dark1" src={`${process.env.PUBLIC_URL}/assets/images/utility/icons/white/scroll_down.png`} alt="scroll_down" />
                        </div>
                    </div>
            </div>
        )
    } else if(data.primary === 'Contact_Slide') {
        return (
            <ContactSlide current={current} index={index} />
        )
    } else {
        return (
            <Link to={data.navTo} tabIndex={-1} className='h-screen relative cursor-pointer'>
                    {   data.type === 'video' &&
                        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                            {/* <source src={`${cdnURL + 'intro.mp4'}`} type="video/mp4" /> */}
                            <source src={`${cdnURL}${data.mediaUrl}`} type="video/mp4" />
                            Your browser does not support HTML5 video.
                        </video>
                    }
                    {
                        data.type === 'image' &&
                        <div className='h-full w-full bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url("${cdnURL}${data.mediaUrl}")`}}></div>
                    }
                    <div className='absolute top-0 left-0 h-full w-full z-10 p-5vw'>
                        <div className='h-full w-full flex flex-col justify-end pb-10 md:pb-0'>
                            <div className={`text-white ${data.theme==='light' ? 'text-white' : 'text-black'}`}>
                                <div className='group relative pb-2 max-w-max'>
                                    <h1 className={`uppercase font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl max-w-min drop-shadow-dark1 dalay-500 ${current.current === index  ? 'animate-fadeInText opacity-100' : 'opacity-0'}`}>{data.name}</h1>
                                    <div className={`h-2 absolute bottom-0 left-0 ${data.theme==='light' ? 'bg-white' : 'bg-black'} ${current.current === index  ? 'animate-fadeInText group-hover:opacity-100 duration-500' : 'opacity-0 duration-100'} w-0 group-hover:w-full`}></div>
                                </div>
                                <p className={`text-lg md:text-2xl font-thin mt-2 drop-shadow-dark2 ${current.current === index  ? 'animate-fadeInLongText opacity-100' : 'opacity-0'}`}>{data.subHeading}</p>
                                <Link tabIndex={-1} to={data.navTo} className={`flex gap-4 items-center hover:gap-12 duration-500 mt-4 drop-shadow-dark2 ${current.current === index  ? 'animate-fadeInLong opacity-100' : 'opacity-0'} ${data.theme === 'light' ? 'text-white' : 'text-black'}`}>
                                    <span className='uppercase text-lg'>Show</span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 11C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13V11ZM3 13C2.44771 13 2 12.5523 2 12C2 11.4477 2.44771 11 3 11V13ZM17 13H3V11H17V13Z" fill="currentColor"/>
                                        <path d="M21.7152 11.7966L16.265 7.90356C15.7355 7.52535 15 7.90385 15 8.55455V15.4454C15 16.0961 15.7355 16.4746 16.265 16.0964L21.7152 12.2034C21.8548 12.1037 21.8548 11.8963 21.7152 11.7966Z" fill="currentColor"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
            </Link>
        )
    }
}

export default Slide;