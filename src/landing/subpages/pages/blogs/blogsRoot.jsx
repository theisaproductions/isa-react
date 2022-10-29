import React from 'react';
import { Outlet } from 'react-router-dom';
import SubpageFooter from '../../components/subpageFooter';

const BlogsRoot = () => {
    

    return (
        <div className=''>
            <div className='min-h-screen'>
                <Outlet />
            </div>
            <SubpageFooter />
        </div>
    )
}

export default BlogsRoot;