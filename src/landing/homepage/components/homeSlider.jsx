import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useSearchParams  } from 'react-router-dom';
import Spinner from '../../components/spinner';
import Slide from './slide';
import SliderNav from './slideNav';
import { useSwipeable } from 'react-swipeable';

const HomePageSlider = (props) => {

    const config = {
        delta: 10,                             // min distance(px) before a swipe starts. *See Notes*
        preventScrollOnSwipe: true,           // prevents scroll during swipe (*See Details*)
        trackTouch: true,                      // track touch input
        trackMouse: true,                     // track mouse input
        rotationAngle: 0,                      // set a rotation angle
        swipeDuration: 10000,               // allowable duration of a swipe (ms). *See Notes*
        touchEventOptions: { passive: true },  // options for touch listeners (*See Details*)
    }
    const handlers = useSwipeable({
        onSwiped: (eventData) => onSwipe(eventData),
        ...config,
    });

    const slideList = [
        { theme: 'light', type: 'video', primary: 'First_Slide', name: '', subHeading: 'An award winning film school with exceptional training and production service.', mediaUrl: 'intro.mp4', navTo: '/'},
        { theme: 'light', type: 'image', primary: false, name: 'About ISA', subHeading: 'Know Our Story.', mediaUrl: 'images/about_us.jpg', navTo: '/about'},
        { theme: 'light', type: 'video', primary: false, name: 'Acting', subHeading: 'Learn The Craft.', mediaUrl: 'acting.mp4', navTo: '/acting'},
        { theme: 'light', type: 'video', primary: false, name: 'Filmmaking', subHeading: 'Direction. Production. Scriptwriting. Cinematography.', mediaUrl: 'filmmaking.mp4', navTo: '/filmmaking'},
        { theme: 'light', type: 'video', primary: false, name: 'Animations', subHeading: 'Make Your Own Story.', mediaUrl: 'animation.mp4', navTo: '/animations'},
        { theme: 'light', type: 'video', primary: false, name: 'Photography Modelling', subHeading: 'Make A Statement Without Saying A Word.', mediaUrl: 'photography.mp4', navTo: '/photography'},
        { theme: 'dark', type: 'image', primary: false, name: 'Fitness', subHeading: 'Zumba. Yoga. Martial Arts. Defence.', mediaUrl: 'images/fitness.jpg', navTo: '/fitness'},
        { theme: 'light', type: 'video', primary: false, name: 'Dance', subHeading: 'A New Move of Life.', mediaUrl: 'dance.mp4', navTo: '/dance'},
        { theme: 'light', type: 'video', primary: false, name: 'Music', subHeading: 'Bring Music To Life.', mediaUrl: 'music.mp4', navTo: '/music'},
        { theme: 'light', type: 'image', primary: false, name: 'Digital Marketing', subHeading: 'Do Things That Matter.', mediaUrl: 'images/marketing.jpg', navTo: '/marketing'},
        { theme: 'dark', type: 'video', primary: false, name: 'Art', subHeading: 'Color Your Dream.', mediaUrl: 'art.mp4', navTo: '/art'},
        { theme: 'dark', type: 'image', primary: false, name: 'Motivation, Life Lessons', subHeading: "Life's An Ocean, Sail It.", mediaUrl: 'images/motivation.jpg', navTo: '/motivation'},
        { theme: 'dark', type: 'image', primary: false, name: 'Private Classes', subHeading: 'Online Classes. At Home Classes. Individual Sessions.', mediaUrl: 'images/private_classes.jpg', navTo: '/?page=19'},
        { theme: 'light', type: 'video', primary: false, name: 'Kids \n Schools \n Colleges', subHeading: 'All Courses For Kids And Students.', mediaUrl: 'schools.mp4', navTo: '/school'},
        { theme: 'light', type: 'image', primary: false, name: 'Corporate Workshops', subHeading: 'Engaging Minds, Empowering Success.', mediaUrl: 'images/corporate.jpg', navTo: '/corporate'},
        { theme: 'light', type: 'video', primary: false, name: 'ISA Productions', subHeading: 'Films. Brands. Ads. Crew.', mediaUrl: 'production.mp4', navTo: '/productions'},
        { theme: 'dark', type: 'image', primary: false, name: 'Talents, Casting, Collaborations', subHeading: 'Talent Management. Artist Community. Collaborations.', mediaUrl: 'images/talent.jpg', navTo: '/talent-management'},
        { theme: 'light', type: 'video', primary: false, name: 'RoutesVille: A Creative Space', subHeading: 'Rent. Co-work, Attend, Collaborate, Celebrate.', mediaUrl: 'routesville.mp4', navTo: '/routesville'},
        { theme: 'dark', type: 'image', primary: false, name: 'Blogs', subHeading: 'A Directory of Wonderful Things.', mediaUrl: 'images/blog.jpg', navTo: '/blogs'},
        { theme: 'dark', primary: 'Contact_Slide'},
    ]

    const [loaded, setLoaded] = useState(false);
    const delay = 500;
    const [marginTop, setMarginTop] = useState();
    const canMoveRef = useRef(true);
    const currentSlideRef = useRef(1);
    const marginTopRef = useRef(null);

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const location = useLocation();

    useEffect(() => {
        const page = searchParams.get('page');
        const index = Number(page);
        if(!index) {
            marginTopRef.current = 0;
            setMarginTop(0);
            currentSlideRef.current = 0;
            setLoaded(true);
        } else {
            if (index <= (slideList.length-1) && index > 0) {
                marginTopRef.current = index * 100;
                currentSlideRef.current = index;
                setMarginTop(index);
            } else {
                marginTopRef.current = 0;
                setMarginTop(0);
                currentSlideRef.current = 0;
                navigate('/');
            }
            setLoaded(true);
        }

        const handleScroll = (e) => {
            if (Math.abs(e.deltaY) > 40) {
                if (e.wheelDelta > 0) {
                  prevSlide();
                } else {
                  nextSlide();
                }
            }
        }

        window.addEventListener("mousewheel", handleScroll)

        return () => {
            window.removeEventListener("mousewheel", handleScroll);
        }
    }, [])

    useEffect(() => {
        const page = searchParams.get('page');
        const index = Number(page);
        if(!index) {
            marginTopRef.current = 0;
            setMarginTop(0);
            currentSlideRef.current = 0;
        } else {
            if (index <= (slideList.length-1) && index > 0) {
                marginTopRef.current = index * 100;
                setMarginTop(index * 100);
                currentSlideRef.current = index;
            } else {
                marginTopRef.current = 0;
                setMarginTop(0);
                currentSlideRef.current = 0;
                navigate('/');
            }
        }
    }, [location])

    const setDebounce = () => {
        setTimeout(() => {
            canMoveRef.current = true;
        }, delay);
    }

    const slideToPos = (id) => {
        if (id <= (slideList.length - 1) && id >= 0) {
            canMoveRef.current = false;
            currentSlideRef.current = id
            marginTopRef.current = (id - 1) * 100;
            setMarginTop((id - 1) * 100);
            setDebounce();
            navigate({pathname: '/', search: `?page=${currentSlideRef.current}`});
        }
    }

    const onSwipe = (e) => {
        if (Math.abs(e.deltaY) > 40) {
          if (e.deltaY > 0) {
            prevSlide();
          } else {
            nextSlide();
          }
        }
    }
    
    const nextSlide = () => {
        if ((currentSlideRef.current < (slideList.length - 1)) && canMoveRef.current) {
            canMoveRef.current = false;
            currentSlideRef.current =  currentSlideRef.current + 1;
            marginTopRef.current = marginTopRef.current + 100;
            setMarginTop(marginTopRef.current);
            setDebounce();
            navigate({pathname: '/', search: `?page=${currentSlideRef.current}`});
        }
    }

    const prevSlide = () => {
        if (currentSlideRef.current > 0 && canMoveRef.current) {
            canMoveRef.current = false;
            currentSlideRef.current = currentSlideRef.current - 1;
            marginTopRef.current = marginTopRef.current - 100;
            setMarginTop(marginTopRef.current);
            setDebounce();
            navigate({pathname: '/', search: `?page=${currentSlideRef.current}`});
        }
    }

    return (
        <div {...handlers} className={`h-screen select-none w-full border-box overflow-hidden bg-white/20 duration-2000 ease-in delay-300 ${loaded ? 'opacity-100': 'opacity-0'}`}>
            {loaded && marginTopRef.current >= 0 ? 
                <div className={`flex flex-col ${loaded && 'duration-500'} ease-in-out`} style={{marginTop: `-${marginTop}vh`}}>
                    {slideList.map((item, index) => {
                        return( 
                            <Slide key={index} data={item} goToSlide={slideToPos} current={currentSlideRef} index={index} />
                        )
                    })}
                    <SliderNav slides={slideList} goToSlide={slideToPos} currentSlide={currentSlideRef} />
                </div>
                :
                <div className='h-full w-full flex justify-center items-center'>
                    <Spinner size="5xl" style={'text-white'} />
                </div>
            }
        </div>
    )
}

export default HomePageSlider;