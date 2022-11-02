import React from 'react';
import { Link } from 'react-router-dom';

const ExploreCoursesComponent = () => {
    return (
        <div className='space-y-4 pb-14'>
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
    )
}

export default ExploreCoursesComponent;