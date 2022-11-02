import React from 'react'

const BlogSideBar = () => {
    return (
        <div className='hidden lg:block lg:col-span-1 py-10 space-y-6 sticky top-0'>
            <div className='bg-gray-200 text-black shadow-sm rounded-md border border-black/40 space-y-4 p-4'>
                <h2 className='text-lg font-bold'>ISA Courses</h2>
                <ul className='text-sm font-semibold space-y-2'>
                    <li><a href="/acting" target="_blank">Acting</a></li>
                    <li><a href="/filmmaking" target="_blank">Filmmaking</a></li>
                    <li><a href="/animations" target="_blank">Animation</a></li>
                    <li><a href="/dance" target="_blank">Dance</a></li>
                    <li><a href="/music" target="_blank">Music</a></li>
                    <li><a href="/art" target="_blank">Art</a></li>
                    <li><a href="/photography" target="_blank">Photography</a></li>
                    <li><a href="/photography" target="_blank">Modelling</a></li>
                    <li><a href="/fitness" target="_blank">Fitness</a></li>
                    <li><a href="/marketing" target="_blank">Digital Marketing</a></li>
                </ul>
            </div>
            <div className='bg-gray-200 text-black shadow-sm rounded-md border border-black/40 space-y-4 p-4'>
                <h2 className='text-lg font-bold'>Collaborations</h2>
                <ul className='text-sm font-semibold space-y-2'>
                    <li><a href="/routesville" target="_blank">Routesville</a></li>
                    <li><a href="/corporate" target="_blank">For Corporates</a></li>
                    <li><a href="/productions" target="_blank">Productions</a></li>
                    <li><a href="/talent-management" target="_blank">Talent Casting</a></li>
                </ul>
            </div>
        </div>
    )
}

export default BlogSideBar;