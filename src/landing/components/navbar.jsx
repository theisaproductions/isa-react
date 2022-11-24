import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const MenuButton = ({onChange, state}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMenuOpen(state);
    }, [state])
    
    const toggleMenu = () => {
        if(menuOpen) {
            setMenuOpen(false);
            onChange(false);
            document.body.style.overflow = "visible"
        } else {
            setMenuOpen(true);
            onChange(true);
            document.body.style.overflow = "hidden"
        }
    }
    return (
        <div onClick={toggleMenu} className={`z-100 group drop-shadow-dark1 cursor-pointer md:py-2`}>
            <div className={`h-6 duration-200 group ${menuOpen ? 'sapce-y-0 pt-2': 'space-y-3'}`}>
                <div className={`h-1 bg-white w-8 duration-200 drop-shadow-md ${menuOpen ? 'rotate-45 -mb-1 group-hover:mt-1': ''}`}></div>
                <div className={`h-1 bg-white w-8 duration-200 drop-shadow-md ${menuOpen ? '-rotate-45 group-hover:-mt-2': ''}`}></div>
            </div>
        </div>
    )
}

const Menu = ({state, setState}) => {
    const viewWidthRef = useRef();
    const navsRef = useRef();
    const [marginLeft, setMarginLeft] = useState(0);

    const menuItems = [
        {name: 'About', to: '/about'},
        {name: 'Courses', to: '/?page=2'},
        {name: 'Services', to: '/?page=15'},
        {name: 'Blogs', to: '/blogs'},
        {name: 'Collaborations', to: '/?page=16'},
    ]

    useEffect(() => {
        viewWidthRef.current = window.innerWidth;
        const resizeListener = (e) => {
            viewWidthRef.current = e.currentTarget.innerWidth;
            if(e.currentTarget.innerWidth > 1023) {
                window.addEventListener('mousemove', mouseMoveListener);
            } else {
                window.removeEventListener('mousemove', mouseMoveListener);
            }
        };
        const mouseMoveListener = (e) => {
            const scope = navsRef.current.scrollWidth - viewWidthRef.current;
            const posPercent =  Math.round((e.clientX / viewWidthRef.current) * 100);
            const setMargin = (scope/100) * posPercent;
            setMarginLeft(setMargin);
        }
        window.addEventListener('resize', resizeListener);
        if(viewWidthRef.current > 1023) {
            window.addEventListener('mousemove', mouseMoveListener);
        }
        return () => {
            window.removeEventListener('resize', resizeListener);
            window.removeEventListener('mousemove', mouseMoveListener);
        }
    }, [])
    
    const cdnURL = "https://cdn.isafilmschool.com/";

    const handleLinkClick = () => {
        setState(false)
        document.body.style.overflow = "visible"
    }

    return (
        <section className={`fixed top-0 right-0 w-screen bg-black z-40 duration-200 linear h-screen ${state ? 'w-screen opacity-1' : 'w-0 opacity-0'}`}>
            <div className='h-full w-full overflow-hidden relative'>
                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src={`${cdnURL}other/menubg.mp4`} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
                <div className='absolute top-0 left-0 h-full w-full z-60'>
                    <div className='h-full w-full text-white pt-5vw flex flex-col'>
                        <div className='flex flex-col flex-grow justify-center overflow-hidden'>
                            <div ref={navsRef} className='hidden lg:flex gap-10 pl-[20%] duration-200' style={{marginLeft: '-' + marginLeft + 'px'}}>
                                {menuItems.map((item, index) => {
                                    return(
                                        <Link onClick={handleLinkClick} to={item.to} key={index} className='text-9xl font-black text-semiBlack hover:text-white/80 duration-300 cursor-pointer'>{item.name}</Link>
                                    )
                                })}
                                <div className='px-24 text-transparent opacity-0 select-none'>null</div>
                            </div>
                            <div className='lg:hidden flex flex-col items-center gap-4'>
                                {menuItems.map((item, index) => {
                                    return(
                                        <Link onClick={handleLinkClick} to={item.to} key={index} className='text-4xl md:text-6xl text-center font-black text-white/80 duration-300 cursor-pointer'>{item.name}</Link>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='pt-4 pb-20 md:pb-10 flex flex-col items-center gap-4 px-4'>
                                <h3 className='text-lg uppercase'>Follow us</h3>
                                <div className='flex gap-x-4 gap-y-2 flex-wrap items-center justify-center text-sm md:text-base'>
                                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/theindianschoolofacting/" className="hover:text-blue-500">FACEBOOK</a>
                                    <a target="_blank" rel="noreferrer" href="https://twitter.com/ISAFilmschool" className="hover:text-sky-400">TWITTER</a>
                                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/theindianschoolofacting/" className="hover:text-pink-500">INSTAGRAM</a>
                                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/the-indian-school-of-acting/"className="hover:text-blue-600">LINKEDIN</a>
                                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCXRE4_lhZmwD_5xPLoTiiYg" className="hover:text-red-500">YOUTUBE</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const Navbar = () => {

    const [menuState, setMenuState] = useState(false);

    const handleClickOnLogo = () => {
        if(menuState) {
            setMenuState(false);
            document.body.style.overflow = "visible"
        }
    }

    return (
        <nav className='select-none'>
            <div className='pt-6 md:pt-8 pb-2 fixed top-0 left-0 right-0 z-40 opacity-1 px-5vw flex items-center justify-between animate-fadeInLong'>
                <Link onClick={handleClickOnLogo} to={'/'} className="drop-shadow-dark1 z-100">
                    <img className='h-12 sm:h-16' src={`${process.env.PUBLIC_URL}/assets/images/logo/white.png`} alt="Logo"/>
                </Link>
                <MenuButton state={menuState} onChange={setMenuState} />
                {menuState && <Menu state={menuState} setState={setMenuState}/>}
            </div>
        </nav>
    )
}

export default Navbar;