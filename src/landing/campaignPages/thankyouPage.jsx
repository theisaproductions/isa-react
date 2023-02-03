import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import SubpageFooter from "../subpages/components/subpageFooter";
import Lottie from "lottie-react";
import sentAnimation from '../lottie/sent.json';

const ThankyouPage = () => {

    const [animationEnded, setAnimationEnded] = useState(false);

    const handleAnimEnd = () => {
        setAnimationEnded(true);
    }

    return(
        <div>
            <Navbar />

            {/* top section */}
            <div className='bg-black pt-36 pb-10 px-5vw'>
                <div className='max-w-6xl mx-auto space-y-4'>
                    <h1 className='text-5xl font-black text-white'>The Indian School of Acting</h1>
                    <div className="flex items-end gap-4 invert">
                        <a tabIndex={-1} target="_blank" rel="noreferrer" href="https://www.facebook.com/theindianschoolofacting/" className='duration-200 hover:opacity-80 '>
                            <img className='h-6' src={`${process.env.PUBLIC_URL}/assets/images/utility/icons/social/facebook.png`} alt="facebook"/>
                        </a>
                        <a tabIndex={-1} target="_blank" rel="noreferrer" href="https://www.instagram.com/theindianschoolofacting/" className='duration-200 hover:opacity-80'>
                            <img className='h-6' src={`${process.env.PUBLIC_URL}/assets/images/utility/icons/social/instagram.png`} alt="instagram"/>
                        </a>
                        <a tabIndex={-1} target="_blank" rel="noreferrer" href="https://twitter.com/ISAFilmschool" className='duration-200 hover:opacity-80'>
                            <img className='h-6' src={`${process.env.PUBLIC_URL}/assets/images/utility/icons/social/twitter.png`} alt="twitter"/>
                        </a>
                        <a tabIndex={-1} target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/the-indian-school-of-acting/" className='duration-200 hover:opacity-80'>
                            <img className='h-6' src={`${process.env.PUBLIC_URL}/assets/images/utility/icons/social/linkedin.png`} alt="linkedin"/>
                        </a>
                        <a tabIndex={-1} target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCXRE4_lhZmwD_5xPLoTiiYg" className='duration-200 hover:opacity-80'>
                            <img className='h-6' src={`${process.env.PUBLIC_URL}/assets/images/utility/icons/social/youtube.png`} alt="youtube"/>
                        </a>
                    </div>
                </div>
            </div>

            <div className='px-5vw py-14'>
                <div className='max-w-6xl mx-auto space-y-10'>
                    <div className={`flex duration-300 ${animationEnded ? 'h-0 mb-0 opacity-0' : 'h-28 mb-2 opacity-1'}`}>
                        <Lottie className="h-28" animationData={sentAnimation} loop={false} onComplete={handleAnimEnd} />
                    </div>
                </div>
                <div className='max-w-6xl mx-auto space-y-10'>
                    <div className='space-y-2'>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Thankyou for contacting us</h2>
                        <p className='text-lg'>Your message has been sent successfully. you will hear from us soon.</p>
                    </div>
                    
                    {/* courses */}
                    <div className='space-y-4'>
                        <h2 className='text-2xl font-bold underline'>Explore our courses</h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                            <Link to={'/acting'} className='hover:scale-105 hover:shadow-md hover:shadow-gray-800 duration-300 shadow-sm shadow-gray-800 border-2 rounded-lg p-4 bg-gradient-to-r from-black via-slate-800 to-emerald-800 text-white'>
                                <p className='text-base'>Courses in</p>
                                <h3 className='text-lg font-semibold'>Acting</h3>
                            </Link>
                            <Link to={'/animations'} className='hover:scale-105 hover:shadow-md hover:shadow-gray-800 duration-300 shadow-sm shadow-gray-800 border-2 rounded-lg p-4 bg-gradient-to-r from-black via-slate-800 to-sky-800 text-white'>
                                <p className='text-base'>Courses in</p>
                                <h3 className='text-lg font-semibold'>Animation</h3>
                            </Link>
                            <Link to={'/filmmaking'} className='hover:scale-105 hover:shadow-md hover:shadow-gray-800 duration-300 shadow-sm shadow-gray-800 border-2 rounded-lg p-4 bg-gradient-to-r from-black via-slate-800 to-blue-800 text-white'>
                                <p className='text-base'>Courses in</p>
                                <h3 className='text-lg font-semibold'>Filmmaking</h3>
                            </Link>
                            <Link to={'/photography'} className='hover:scale-105 hover:shadow-md hover:shadow-gray-800 duration-300 shadow-sm shadow-gray-800 border-2 rounded-lg p-4 bg-gradient-to-r from-black via-slate-800 to-violet-800 text-white'>
                                <p className='text-base'>Courses in</p>
                                <h3 className='text-lg font-semibold'>Photography</h3>
                            </Link>
                            <Link to={'/dance'} className='hover:scale-105 hover:shadow-md hover:shadow-gray-800 duration-300 shadow-sm shadow-gray-800 border-2 rounded-lg p-4 bg-gradient-to-r from-black via-slate-800 to-purple-800 text-white'>
                                <p className='text-base'>Courses in</p>
                                <h3 className='text-lg font-semibold'>Dance</h3>
                            </Link>
                            <Link to={'/music'} className='hover:scale-105 hover:shadow-md hover:shadow-gray-800 duration-300 shadow-sm shadow-gray-800 border-2 rounded-lg p-4 bg-gradient-to-r from-black via-slate-800 to-fuchsia-800 text-white'>
                                <p className='text-base'>Courses in</p>
                                <h3 className='text-lg font-semibold'>Music</h3>
                            </Link>
                            <Link to={'/art'} className='hover:scale-105 hover:shadow-md hover:shadow-gray-800 duration-300 shadow-sm shadow-gray-800 border-2 rounded-lg p-4 bg-gradient-to-r from-black via-slate-800 to-pink-800 text-white'>
                                <p className='text-base'>Courses in</p>
                                <h3 className='text-lg font-semibold'>Art</h3>
                            </Link>
                            <Link to={'/marketing'} className='hover:scale-105 hover:shadow-md hover:shadow-gray-800 duration-300 shadow-sm shadow-gray-800 border-2 rounded-lg p-4 bg-gradient-to-r from-black via-slate-800 to-red-800 text-white'>
                                <p className='text-base'>Courses in</p>
                                <h3 className='text-lg font-semibold'>Marketing</h3>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            <SubpageFooter />
        </div>
    )
}

export default ThankyouPage;