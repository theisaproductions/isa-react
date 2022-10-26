import React, { useEffect } from 'react';

const TopMediaComponent = ({type, mediaUrl}) => {

    const cdnURL = "https://cdn.isafilmschool.com/sub-page-videos/";
    const localUrl = `${process.env.PUBLIC_URL}/assets/images/subpageVideos/`;

    useEffect(() => {
        console.log(mediaUrl);
    }, [])

    const scrollDown = () => {
        if(window) {
            const height = window.innerHeight;
            window.scrollTo({
                top: height / 1.2,
                left: 0,
                behavior: "smooth",
            });
        }
    }


    return (
        <div className='h-screen w-full bg-black/80 relative'>
            {
                type === 'video' &&
                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src={`${cdnURL}${mediaUrl}`} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
            }
            {
                type === 'image' &&
                <div className='h-full w-full bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url("${localUrl}${mediaUrl}")`}}></div>
            }

            <div className='absolute top-0 left-0 h-full w-full z-10 p-5vw flex flex-col items-center justify-end'>
                <div onClick={scrollDown} className="cursor-pointer duration-300 hover:scale-150">
                    <img className='h-12 animate-bounce drop-shadow-dark1' src={`${process.env.PUBLIC_URL}/assets/images/utility/icons/white/scroll_down.png`} alt="scroll_down" />
                </div>
            </div>
        </div>
    )
}

export default TopMediaComponent;