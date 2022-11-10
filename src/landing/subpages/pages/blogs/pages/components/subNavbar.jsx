import React from 'react';
import { Link } from 'react-router-dom';

const BlogSubNavbar = ({showNav = false}) => {

    const items = [
        {name: 'Acting Courses', link: '/acting'},
        {name: 'Filmmaking Courses', link: '/filmmaking'},
        {name: 'Animation Courses', link: '/animations'},
        {name: 'Photography Courses', link: '/photography'},
        {name: 'Dance Courses', link: '/dance'},
        {name: 'Music Courses', link: '/music'},
        {name: 'Art Courses', link: '/art'},
        {name: 'For Corporates', link: '/corporate'},
        {name: 'Routesville', link: '/routesville'},
    ]
    return (
        <div className='space-y-2'>
            {
                showNav &&
                <div className='flex pt-4 gap-2 select-none font-semibold'>
                    <Link to={"/blogs"} className='text-pink-600'>All Blogs</Link>
                    <span className='text-pink-600'>{'>'}</span>
                    <div className=''>Blog</div>
                </div>
            }
            <div className='flex flex-wrap gap-2 md:gap-6 pt-4'>
                {items.map((item,index) => {
                    return (
                        <Link
                            key={index}
                            to={item.link}
                            className='px-2 py-1 border border-black text-xs md:text-sm font-bold shadow-sm shadow-pink-400 duration-300 hover:shadow-md hover:shadow-pink-300'
                        >{item.name}</Link>
                    )
                })}
            </div>
            
        </div>
    )
}

export default BlogSubNavbar;