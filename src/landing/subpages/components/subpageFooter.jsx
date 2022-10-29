import React from 'react';
import { Link } from 'react-router-dom';

const SubpageFooter = () => {

    const courses = [
        {name: 'Acting', link: '/acting'},
        {name: 'Film Making', link: '/filmmaking'},
        {name: 'Animation', link: '/animations'},
        {name: 'Photography', link: '/photography'},
        {name: 'Modelling', link: '/photography'},
        {name: 'Fitness', link: '/fitness'},
        {name: 'Music', link: '/music'},
        {name: 'Dance', link: '/dance'},
        {name: 'Digital Marketing', link: '/marketing'},
        {name: 'Art', link: '/art'},
        {name: 'Delhi', link: '/acting'}
    ]

    return (
        <div className='bg-black'>
            <div className='max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-10 md:gap-20 text-white'>
                <div className='pr-10 flex'>
                    <Link to={'/'} className="z-100">
                        <img className='h-16 md:h-28' src={`${process.env.PUBLIC_URL}/assets/images/logo/white.png`} alt="Logo"/>
                    </Link>
                </div>
                <div className='flex flex-grow flex-col gap-4'>
                    <h4 className='text-2xl font-bold'>Courses in</h4>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-x-2'>
                        {courses.map((item,index) => {
                            return (
                                <div key={index}>
                                    <Link to={item.link} className='text-white/60 hover:text-white/90 duration-300 group uppercase text-sm'>Courses in <span className='group-hover:text-sky-400'>{item.name}</span></Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubpageFooter;