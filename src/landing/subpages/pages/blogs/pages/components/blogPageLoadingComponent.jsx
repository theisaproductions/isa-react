import React from 'react';

const BlogPageLoadingComponent = () => {
    return (
        <div>
            <div className='space-y-10 py-10'>
                <div className='space-y-4'>
                    <div className='animate-pulse bg-gray-300 h-10 rounded w-1/2'></div>
                    <div className='animate-pulse bg-gray-300 h-6 rounded w-2/3'></div>
                    <div className='animate-pulse bg-gray-300 h-44 rounded w-full'></div>
                </div>
                <div className='space-y-4'>
                    <div className='animate-pulse bg-gray-300 h-10 rounded w-1/2'></div>
                    <div className='animate-pulse bg-gray-300 h-6 rounded w-2/3'></div>
                    <div className='animate-pulse bg-gray-300 h-44 rounded w-full'></div>
                </div>
            </div>
        </div>
    )
}

export default BlogPageLoadingComponent;