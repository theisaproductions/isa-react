import React from 'react'

const BlogSideBar = () => {
    return (
        <div className='hidden lg:block lg:col-span-1 py-10 space-y-6 sticky top-0'>
            <div className='bg-gray-200 text-black shadow-sm rounded-md border border-black/40 space-y-4 p-4'>
                <h2 className='text-lg font-bold'>ISA Courses</h2>
                <ul className='text-sm font-semibold space-y-2'>
                    <li><a href="/acting" target="_blank" rel="noreferrer">Acting</a></li>
                    <li><a href="/filmmaking" target="_blank" rel="noreferrer">Filmmaking</a></li>
                    <li><a href="/animations" target="_blank" rel="noreferrer">Animation</a></li>
                    <li><a href="/dance" target="_blank" rel="noreferrer">Dance</a></li>
                    <li><a href="/music" target="_blank" rel="noreferrer">Music</a></li>
                    <li><a href="/art" target="_blank" rel="noreferrer">Art</a></li>
                    <li><a href="/photography" target="_blank" rel="noreferrer">Photography</a></li>
                    <li><a href="/photography" target="_blank" rel="noreferrer">Modelling</a></li>
                    <li><a href="/fitness" target="_blank" rel="noreferrer">Fitness</a></li>
                    <li><a href="/marketing" target="_blank" rel="noreferrer">Digital Marketing</a></li>
                </ul>
            </div>
            <div className='bg-gray-200 text-black shadow-sm rounded-md border border-black/40 space-y-4 p-4'>
                <h2 className='text-lg font-bold'>Collaborations</h2>
                <ul className='text-sm font-semibold space-y-2'>
                    <li><a href="/routesville" target="_blank" rel="noreferrer">Routesville</a></li>
                    <li><a href="/corporate" target="_blank" rel="noreferrer">For Corporates</a></li>
                    <li><a href="/productions" target="_blank" rel="noreferrer">Productions</a></li>
                    <li><a href="/talent-management" target="_blank" rel="noreferrer">Talent Casting</a></li>
                </ul>
            </div>
        </div>
    )
}

export default BlogSideBar;