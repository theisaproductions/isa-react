import React from 'react';
import Navbar from '../components/navbar';
import HomePageSlider from './components/homeSlider';

const HomePage = () => {
    return(
        <div className='h-screen bg-black'>
            <HomePageSlider />
        </div>
    )
}

export default HomePage;