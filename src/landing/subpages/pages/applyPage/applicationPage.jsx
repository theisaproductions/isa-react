import React from 'react';
import { Outlet } from 'react-router-dom';
import SubpageFooter from '../../components/subpageFooter';

const ApplyPage = () => {
    return (
        <div className=''>
            <div className='min-h-screen'>
                <Outlet />
            </div>
            <SubpageFooter />
        </div>
    )
}

export default ApplyPage;